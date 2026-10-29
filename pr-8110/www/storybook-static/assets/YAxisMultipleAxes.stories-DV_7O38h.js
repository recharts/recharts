import{R as t}from"./iframe-LvrC9cNQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C7vYJVdQ.js";import{R as l}from"./zIndexSlice-Chla-YhC.js";import{C as x}from"./ComposedChart-DQuHGzhG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Ua0zARqk.js";import{L as a}from"./Line-DKxaw0aF.js";import{X as c}from"./XAxis-ja2TXwgr.js";import{T as g}from"./Tooltip-RGkhP-Ok.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DdT2eLCH.js";import"./Text-DGG_TkrL.js";import"./resolveDefaultProps-yQwV084p.js";import"./DOMUtils-CdIFc34u.js";import"./ZIndexLayer-Dv3aUmzs.js";import"./index-Dqr70K98.js";import"./index-D77JjdwQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DMX56tfl.js";import"./throttle-BrACn0xJ.js";import"./axisSelectors-C8xBMBuJ.js";import"./d3-scale-CfvKpIbF.js";import"./CartesianAxis-D4FB0bCi.js";import"./Layer-CcIpGH5s.js";import"./types-Dk8bWHyp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BsmmD3xm.js";import"./index-LmwlvfKc.js";import"./index-Cxc9kCWG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CiGR2OiQ.js";import"./index-Bs0fdiGB.js";import"./CartesianChart-C9KorEin.js";import"./ZIndexPortal-DytdVxJW.js";import"./CategoricalChart-DgMeZkIA.js";import"./LabelList-DdXF3DfJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D15iKpUy.js";import"./useAnimationId-BX5uo1zq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dyl71ZcK.js";import"./tooltipContext-D4P317Ja.js";import"./dataEntryStyles-CJNDsNBI.js";import"./ErrorBarContext-CdeJUeJW.js";import"./activeStyles-MYCrrU5C.js";import"./SetGraphicalItem-CEH73uPW.js";import"./getZIndexFromUnknown-D7VTdN_Z.js";import"./useEffectiveDataKey-BIhhRaL_.js";import"./fillDefinitions-CA9aYCap.js";import"./omit-DdDKpAPD.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CVAgTuhQ.js";import"./step-XOREPbKt.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CCaTRIyk.js";import"./Dot-C6CSCKrA.js";import"./Symbols-Z0uJKVZu.js";import"./symbol-BDoGzdqc.js";import"./getRadiusAndStrokeWidthFromDot-BgrGISNG.js";import"./useElementOffset-BZvICa72.js";import"./uniqBy-DfF6PSBk.js";import"./iteratee-Bmo_u-OE.js";import"./Cross-D6lex_Im.js";import"./Sector-GmOld6VB.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
