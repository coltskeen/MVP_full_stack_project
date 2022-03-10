DROP TABLE IF EXISTS quotes;

CREATE TABLE quotes (
    id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    author text,
    source text,
    quote text
);

INSERT INTO quotes(author, source, quote) VALUES('J.R.R. Tolkien', 'Mythopoeia', 'Blessed are the legend-makers with their rhyme of things not found within recorded time.');
INSERT INTO quotes(author, source, quote) VALUES('J.R.R. Tolkien', 'On Fairy-Stories', 'The story-maker proves a successful "sub-creator". He makes a Secondary World which your mind can enter. Inside it, what he relates is "true": it accords with the laws of that world. You therefore believe it, while you are, as it were, inside. The moment disbelief arises, the spell is broken; the magic, or rather art, has failed.');
INSERT INTO quotes(author, source, quote) VALUES('J.R.R. Tolkien', 'From an interview with Dennis Gerrolt on the BBC''s radio show "Now Read On" (January 1971)', 'It gives me great pleasure, a good name. I always in writing start with a name. Give me a name and it produces a story, not the other way about normally.');
INSERT INTO quotes(author, source, quote) VALUES('J.R.R. Tolkien', 'From a letter to his son Christopher on January 30, 1945', 'A story must be told or there''ll be no story, yet it is the untold stories that are most moving.');
INSERT INTO quotes(author, source, quote) VALUES('J.R.R. Tolkien', 'On Fairy-Stories', 'The mind that thought of light, heavy, grey, yellow, still, swift also conceived of magic that would make heavy things light and able to fly, turn grey lead into yellow gold, and the still rock into a swift water. If it could do the one, it could do the other; it inevitably did both. When we can take green from grass, blue from heaven, and red from blood, we have already an enchanter''s power.');
INSERT INTO quotes(author, source, quote) VALUES('J.R.R. Tolkien', 'Beowulf: The Monsters and the Critics (1936)', 'The significance of a myth is not easily to be pinned on paper by analytical reasoning. It is at its best when it is presented by a poet who feels rather than makes explicit what his theme portends; who presents it incarnate in the world of history and geography, as our poet has done. Its defender is thus at a disadvantage: unless he is careful, and speaks in parables, he will kill what he is studying by vivisection, and he will be left with a formal or mechanical allegory, and what is more, probably with one that will not work. For myth is alive at once and in all its parts, and dies before it can be dissected.');
INSERT INTO quotes(author, source, quote) VALUES('J.R.R. Tolkien', 'Tolkien in Oxford (1968), a BBC 2 television documentary', 'If you really come down to any large story that interests people—holds the attention for a considerable time ... human stories are practically always about one thing, aren''t they? Death. The inevitability of death.');
INSERT INTO quotes(author, source, quote) VALUES('J.R.R. Tolkien', 'On Fairy-Stories', 'Fantasy remains a human right: we make in our measure and in our derivative mode, because we are made: and not only made, but made in the image and likeness of a Maker.');
INSERT INTO quotes(author, source, quote) VALUES('J.R.R. Tolkien', 'Foreword to the 2nd Edition of "The Lord of the Rings" (1966)', 'The prime motive was the desire of a tale-teller to try his hand at a really long story that would hold the attention of readers, amuse them, delight them, and at times maybe excite them or deeply move them.');
INSERT INTO quotes(author, source, quote) VALUES('J.R.R. Tolkien', 'Letter to Stanley Unwin (March 1945)', 'Usually I compose only with great difficulty and endless rewriting.');
INSERT INTO quotes(author, source, quote) VALUES('Treebeard', 'The Two Towers', 'My name is growing all the time, and I''ve lived a very long, long time; so my name is like a story. Real names tell you the story of the things they belong to in my language, in the Old Entish as you might say. It is a lovely language, but it takes a very long time to say anything in it, because we do not say anything in it, unless it is worth taking a long time to say, and to listen to.');