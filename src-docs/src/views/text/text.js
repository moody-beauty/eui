import React from 'react';

import { EuiText, EuiHorizontalRule } from '../../../../src/components';

export default () => (
  <div>
    <EuiText grow={false}>
      <h1>This is Heading One</h1>
      <p>
        Far out in the uncharted backwaters of the <a href="#">unfashionable</a>{' '}
        end of the western spiral arm of the Galaxy lies a small unregarded
        yellow sun. When suddenly some wild JavaScript code appeared!{' '}
        <code>const whoa = &quot;!&quot;</code>
      </p>

      <pre>
        <code>const completelyUnexpected = &quot;the audacity!&quot;;</code>
      </pre>

      <p>That was close.</p>

      <blockquote>
        <p>
          I&apos;ve seen things you people wouldn&apos;t believe. Attack ships
          on fire off the shoulder of Orion. I watched C-beams glitter in the
          dark near the Tannhäuser Gate. All those moments will be lost in time,
          like tears in rain. Time to die.
        </p>
      </blockquote>

      <p>
        Orbiting this at a distance of roughly ninety-two million miles is an
        utterly insignificant little blue green planet whose ape- descended life
        forms are so amazingly primitive that they still think digital watches
        are a pretty neat idea.
      </p>

      <ul>
        <li>List item one</li>
        <li>List item two</li>
        <li>Dolphins</li>
      </ul>

      <p>
        This planet has - or rather had - a problem, which was this: most of the
        people living on it were unhappy for pretty much of the time. Many
        solutions were suggested for this problem, but most of these were
        largely concerned with the movements of small green pieces of paper,
        which is odd because on the whole it was not the small green pieces of
        paper that were unhappy.
      </p>

      <h2>This is Heading Two</h2>

      <ol>
        <li>Number one</li>
        <li>Number two</li>
        <li>Dolphins again</li>
      </ol>

      <p>
        But the dog wasn&rsquo;t lazy, it was just practicing mindfulness, so it
        had a greater sense of life-satisfaction than that fox with all its
        silly jumping.
      </p>

      <p>
        And from the fox&rsquo;s perspective, life was full of hoops to jump{' '}
        <em>through</em>, low-hanging fruit to jump <em>for</em>, and dead car
        batteries to jump-<em>start</em>.
      </p>

      <h3>This is Heading Three</h3>

      <p>
        So it thought the dog was making a poor life choice by focusing so much
        on mindfulness. What if its car broke down?
      </p>

      <h4>This is Heading Four</h4>

      <p>
        So it thought the dog was making a poor life choice by focusing so much
        on mindfulness. What if its car broke down?
      </p>

      <h5>This is Heading Five</h5>

      <p>
        <small>
          So it thought the dog was making a poor life choice by focusing so
          much on mindfulness. What if its car broke down?
        </small>
      </p>

      <h6>This is Heading Six</h6>

      <EuiHorizontalRule />

      <dl>
        <dt>The Elder Scrolls: Morrowind</dt>
        <dd>The opening music alone evokes such strong memories.</dd>
        <dt>TIE Fighter</dt>
        <dd>
          The sequel to XWING, join the dark side and fly for the Emporer.
        </dd>
        <dt>Quake 2</dt>
        <dd>The game that made me drop out of college.</dd>
      </dl>

      <EuiHorizontalRule />

      <dl className="eui-definitionListReverse">
        <dt>Name</dt>
        <dd>The Elder Scrolls: Morrowind</dd>
        <dt>Game style</dt>
        <dd>Open-world, fantasy, action role-playing</dd>
        <dt>Release date</dt>
        <dd>2002</dd>
      </dl>

      <p>
        Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text (Windows).
      </p>

      <p>
        Press <kbd>Cmd</kbd> + <kbd>C</kbd> to copy text (Mac OS).
      </p>
    </EuiText>
  </div>
);
