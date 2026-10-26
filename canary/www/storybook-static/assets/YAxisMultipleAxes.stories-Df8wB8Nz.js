import{R as t}from"./iframe-DfmqqqCr.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-b9ABcoaF.js";import{R as l}from"./zIndexSlice-d0YHK6xw.js";import{C as x}from"./ComposedChart-gLZpFizW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DvkRPddU.js";import{L as a}from"./Line-Dip9Rer8.js";import{X as c}from"./XAxis-B0knr_7L.js";import{T as g}from"./Tooltip-C6TAD7LP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C130jv2t.js";import"./Text-CG3VrxOm.js";import"./resolveDefaultProps-ComwQ6WC.js";import"./pageBackground-dHeomk-I.js";import"./ZIndexLayer-Cvk6PIs7.js";import"./index-Lp2jcwfG.js";import"./index-CSO17-J0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DpDn-hFD.js";import"./throttle-DAA8X2l5.js";import"./dataEntryStyles-CeCkFK1K.js";import"./axisSelectors-DWglHHAi.js";import"./d3-scale-Ci_zYY1V.js";import"./CartesianAxis-CYll20RU.js";import"./Layer-BrcDHHcB.js";import"./types-9Kx7AXVb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4mLmnSQ.js";import"./index-pJqwg3_d.js";import"./index-hdUN889v.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D6KUw4si.js";import"./index-CQMOT26p.js";import"./CartesianChart-LSHb6JPq.js";import"./ZIndexPortal-BDrojabW.js";import"./CategoricalChart-BsBaBvnF.js";import"./LabelList-C0IeivS9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCmTs9GK.js";import"./useAnimationId-RNI69aEn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Csx1hMVo.js";import"./tooltipContext-BKMUBK5C.js";import"./RegisterGraphicalItemId-CzjpJBeg.js";import"./ErrorBarContext-C3AKnlrm.js";import"./activeStyles-CHOILxkP.js";import"./SetGraphicalItem-41fol6Y1.js";import"./getZIndexFromUnknown-CgUp2j4H.js";import"./useEffectiveDataKey-Ri-wD3JN.js";import"./omit-eqC7RsUJ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DdFuR-cZ.js";import"./step-pAgvwVo8.js";import"./path-DyVhHtw_.js";import"./ActivePoints-h83UhP7R.js";import"./Dot-BTf9HS3j.js";import"./Symbols-BOmwAADp.js";import"./symbol-CvaR8Ff4.js";import"./getRadiusAndStrokeWidthFromDot-CCLTT3lF.js";import"./useElementOffset-BIpV4hkj.js";import"./uniqBy-B-Zb9oWg.js";import"./iteratee-KP65sc9-.js";import"./Cross-I7yLc-X5.js";import"./Sector-BnHkZCan.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
