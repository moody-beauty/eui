import React, { useState } from 'react';
import {
  EuiText,
  EuiResizableContainer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiStat,
  EuiPanel,
} from '../../../../src/components';
// @ts-ignore - faker does not have type declarations
import { fake } from 'faker';
import { useGeneratedHtmlId } from '../../../../src/services';

const text = (
  <>
    <p>{fake('{{lorem.paragraphs}}')}</p>
    <p>{fake('{{lorem.paragraphs}}')}</p>
    <p>{fake('{{lorem.paragraphs}}')}</p>
  </>
);

export default () => {
  const firstPanelId = useGeneratedHtmlId({ prefix: 'firstPanel' });
  const secondPanelId = useGeneratedHtmlId({ prefix: 'secondPanel' });
  const [resizeTrigger, setResizeTrigger] = useState<'pointer' | 'key'>();
  const [sizes, setSizes] = useState({
    [firstPanelId]: 50,
    [secondPanelId]: 50,
  });

  return (
    <EuiFlexGroup direction="column">
      <EuiFlexItem>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiPanel>
              <EuiStat
                title={resizeTrigger ?? ''}
                titleSize="m"
                description="Trigger"
                isLoading={!resizeTrigger}
              />
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel>
              <EuiStat
                title={`${Math.round(sizes[firstPanelId])}%`}
                titleSize="m"
                description="First panel"
                isLoading={!resizeTrigger}
              />
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel>
              <EuiStat
                title={`${Math.round(sizes[secondPanelId])}%`}
                titleSize="m"
                description="Second panel"
                isLoading={!resizeTrigger}
              />
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiResizableContainer
          style={{ height: '200px' }}
          onPanelWidthChange={(newSizes) => {
            setSizes((prevSizes) => ({ ...prevSizes, ...newSizes }));
          }}
          onResizeStart={(trigger) => setResizeTrigger(trigger)}
          onResizeEnd={() => setResizeTrigger(undefined)}
        >
          {(EuiResizablePanel, EuiResizableButton) => (
            <>
              <EuiResizablePanel
                id={firstPanelId}
                size={sizes[firstPanelId]}
                minSize="30%"
              >
                <EuiText>
                  <div>{text}</div>
                  <a href="">Hello world</a>
                </EuiText>
              </EuiResizablePanel>

              <EuiResizableButton />

              <EuiResizablePanel
                id={secondPanelId}
                size={sizes[secondPanelId]}
                minSize="200px"
              >
                <EuiText>{text}</EuiText>
              </EuiResizablePanel>
            </>
          )}
        </EuiResizableContainer>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
