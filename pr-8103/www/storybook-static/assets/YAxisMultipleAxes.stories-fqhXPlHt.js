import{R as t}from"./iframe-B87OnEHe.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CIV2IRSG.js";import{R as l}from"./zIndexSlice-CayLxsD5.js";import{C as x}from"./ComposedChart-CPmtdHf0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-5lkvLcEM.js";import{L as a}from"./Line-CNmt-EGB.js";import{X as c}from"./XAxis-P4dvE_Lf.js";import{T as g}from"./Tooltip-BGTHTN15.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CCuY2Era.js";import"./Text-DwFYMnaM.js";import"./resolveDefaultProps-BO6btQ4Q.js";import"./pageBackground-CO_WqCks.js";import"./ZIndexLayer-v9eepHO2.js";import"./index-BAzLdDjX.js";import"./index-DvKC7fGa.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DUkdlQZC.js";import"./throttle-DxXe2fSX.js";import"./dataEntryStyles-B54Iq7xi.js";import"./axisSelectors-DZJywaTf.js";import"./d3-scale-BoPllMsy.js";import"./CartesianAxis-O93eF2fQ.js";import"./Layer-B5mZFZkh.js";import"./types-CvQS_eYG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Db8-13BV.js";import"./index-BmBjwPgJ.js";import"./index-Cizw57Lu.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C4kU4M5n.js";import"./index-DKiqyqcX.js";import"./CartesianChart-B_5wOWKW.js";import"./ZIndexPortal-BhrD04L0.js";import"./CategoricalChart-DOgCDtrc.js";import"./LabelList-DteE4Y6d.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-XssNjNyZ.js";import"./useAnimationId-DHS0idNw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KYdt019M.js";import"./tooltipContext-UIwdYet0.js";import"./RegisterGraphicalItemId-CXcrjxG2.js";import"./ErrorBarContext-DgiLcLgY.js";import"./activeStyles-gtCHrDIH.js";import"./SetGraphicalItem-t5mD_xbz.js";import"./getZIndexFromUnknown-CoN1Aw3R.js";import"./useEffectiveDataKey-D32F3nXW.js";import"./omit-Dn3mPKBL.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CzFk349I.js";import"./step-Dlj9Cqyz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bws5v7as.js";import"./Dot-5T458_dG.js";import"./Symbols-C5l9Kmbi.js";import"./symbol-Bou66IFx.js";import"./getRadiusAndStrokeWidthFromDot-tXoAwvPO.js";import"./useElementOffset-BRYlrKrP.js";import"./uniqBy-V2CyeYbI.js";import"./iteratee-BGK8_Z9h.js";import"./Cross-DlkNvcOC.js";import"./Sector-DlmqajRv.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
