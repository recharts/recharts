import{R as t}from"./iframe-BpPwD_oK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-GMxCrcAm.js";import{R as l}from"./zIndexSlice-CZskftau.js";import{C as x}from"./ComposedChart-B7ZoxfUU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-yMjJlUwJ.js";import{L as a}from"./Line-C-mXzzMU.js";import{X as c}from"./XAxis-Dja-Llqh.js";import{T as g}from"./Tooltip-IpPgWDqU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dm2gX9XZ.js";import"./Text-BhQ_ePKx.js";import"./resolveDefaultProps-oHxAH6y3.js";import"./DOMUtils-BrCWiXlY.js";import"./ZIndexLayer-BfN85Ldf.js";import"./index-BDbYb2y7.js";import"./index-C-Ap2UZI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-gNxk2Qvg.js";import"./throttle-jRz9fd5W.js";import"./axisSelectors-CCOlr32b.js";import"./d3-scale-CBz-jIwW.js";import"./CartesianAxis-DPe5aXb5.js";import"./Layer-uKCEWQEh.js";import"./types-C3LEdY55.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BacllR_T.js";import"./index-sbP1X6JH.js";import"./index-C3FSz61l.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DtJNI11v.js";import"./index-DaSN1dEV.js";import"./fillDefinitions-BoqwWLdI.js";import"./CartesianChart-DUDm0Jrf.js";import"./ZIndexPortal-CPCtvPJx.js";import"./CategoricalChart-BCsFwQg5.js";import"./LabelList-CdwfQdaD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KfOr2rpu.js";import"./useAnimationId-DjPYETUK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D3pEehn2.js";import"./tooltipContext-CEYILYfp.js";import"./dataEntryStyles-CSbDp-Df.js";import"./ErrorBarContext-C5It2V8R.js";import"./activeStyles-BKBboL8s.js";import"./SetGraphicalItem-CtMfZbBm.js";import"./getZIndexFromUnknown-A314PGjt.js";import"./useEffectiveDataKey-CeotyzvV.js";import"./omit-CoJUrBx5.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CsmQrmZK.js";import"./step-uxJcfdRW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-rm17DGg7.js";import"./Dot-D_vqSwmx.js";import"./Symbols-CmOlxG5J.js";import"./symbol-CEUG_TNl.js";import"./getRadiusAndStrokeWidthFromDot-BkFKvs15.js";import"./useElementOffset-Clqm1mfa.js";import"./uniqBy-hvFHRVdb.js";import"./iteratee-CYqM1-65.js";import"./Cross-DUGsSR05.js";import"./Sector-CRRCzxF2.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
