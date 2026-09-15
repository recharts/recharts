import{R as t}from"./iframe-BWKtkC3a.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bjai06eq.js";import{R as l}from"./zIndexSlice-CJYktc5S.js";import{C as x}from"./ComposedChart-B4E8jNZy.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BBD83vn3.js";import{L as a}from"./Line-_xIPfQEK.js";import{X as c}from"./XAxis-Beuqpq4u.js";import{T as g}from"./Tooltip-C5Fcyz1u.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-3HnLAq9q.js";import"./Text-D6blVt8R.js";import"./resolveDefaultProps-BSdxfhaa.js";import"./DOMUtils-BR5iDZmA.js";import"./isWellBehavedNumber-Bx1-jT0B.js";import"./useId-Dtk37enT.js";import"./useBackwardsCompatibleTheme-ChHa43Fb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAOggInk.js";import"./index-dmgaO9Ns.js";import"./index-DnD7Y3-0.js";import"./RechartsWrapper-BXQ1II60.js";import"./axisSelectors-4rRhJnZy.js";import"./throttle-CSPVuwv0.js";import"./d3-scale-BK7khyLD.js";import"./index-2yxEF-zg.js";import"./index-BJ1rhnQo.js";import"./renderedTicksSlice-CkjOXsqY.js";import"./index-BdvYswuq.js";import"./CartesianAxis-CjxgM0pW.js";import"./Layer-BW2neL7L.js";import"./types-DVYgZ5G0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ck046iEl.js";import"./chartDataContext-CHsw8eio.js";import"./CategoricalChart-CTjKdKoB.js";import"./AnimatedItems-DrPbLth3.js";import"./useAnimationId-DDNvTaoZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Mj13KGuq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BQlodlaC.js";import"./tooltipContext-Q37ejvqM.js";import"./RegisterGraphicalItemId-DgdLcRFp.js";import"./ErrorBarContext-CPaf1b78.js";import"./GraphicalItemClipPath-DnbnKIJy.js";import"./SetGraphicalItem-CkEmM5fN.js";import"./getZIndexFromUnknown-B1_FcIAz.js";import"./useGraphicalItemIdentity-hpl57a82.js";import"./Curve-DCrUUXgR.js";import"./step-4b6-oj2z.js";import"./path-DyVhHtw_.js";import"./ActivePoints-UtB0KfzC.js";import"./Dot-j4FVDpMz.js";import"./getRadiusAndStrokeWidthFromDot-CP4Q4sYB.js";import"./useElementOffset-Dl9OEUY7.js";import"./uniqBy-jfG8v9oK.js";import"./iteratee-CcJpQkl8.js";import"./Cross-CWtmgP3K.js";import"./Sector-DnckVTOs.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
