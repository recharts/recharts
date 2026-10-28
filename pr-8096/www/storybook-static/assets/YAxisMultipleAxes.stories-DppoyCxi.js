import{R as t}from"./iframe-PkW0ejx3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B7QgfXKC.js";import{R as l}from"./zIndexSlice-CtEWDdkW.js";import{C as x}from"./ComposedChart-coptphr3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-gCXSeosi.js";import{L as a}from"./Line-DzHsVnQW.js";import{X as c}from"./XAxis-CyABI53G.js";import{T as g}from"./Tooltip-CmeF5bAK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-V19_IbKL.js";import"./Text-DQ7hgPmk.js";import"./resolveDefaultProps-CnX9VcG6.js";import"./pageBackground-BxU5BZDR.js";import"./ZIndexLayer-wqGg5hkh.js";import"./index-2kQDiEg9.js";import"./index-CthbcSOz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DErot-vK.js";import"./throttle-DhIpRp7y.js";import"./axisSelectors-CBaUhvBl.js";import"./d3-scale-C_GfRdoG.js";import"./CartesianAxis-BJQP999U.js";import"./Layer-D2wEMTDW.js";import"./types-iBZQammS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BiYv8y7m.js";import"./index-bhfK5Tel.js";import"./index-DCKddudy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DJcwwy7_.js";import"./index-DIk-TLTX.js";import"./CartesianChart-CtUUiyil.js";import"./ZIndexPortal-DB_x6J9o.js";import"./CategoricalChart-CFsdFZkP.js";import"./LabelList-BcjFKpxG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DF26d-VT.js";import"./useAnimationId-JttpOibe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-hU5Uvesj.js";import"./tooltipContext-Do4-zYB2.js";import"./dataEntryStyles-BkC7RZGO.js";import"./ErrorBarContext-RvIB7RYt.js";import"./activeStyles-RIXOH0Ky.js";import"./SetGraphicalItem-rvzc4GbA.js";import"./getZIndexFromUnknown-CRFh8gux.js";import"./useEffectiveDataKey-UMh99VlP.js";import"./omit-BIyCmy59.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DU0fyPxy.js";import"./step-Ckyxmzdw.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DYuBZm8s.js";import"./Dot-ByWXk2hq.js";import"./Symbols-BgSbEpWI.js";import"./symbol-BJli0oSq.js";import"./getRadiusAndStrokeWidthFromDot-DFz9CZPw.js";import"./useElementOffset--mFjDBED.js";import"./uniqBy-Bm4ZTWFv.js";import"./iteratee-C7s5c1SC.js";import"./Cross-BKa6aCvQ.js";import"./Sector-DFqqiOiZ.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
