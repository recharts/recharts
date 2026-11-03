import{R as t}from"./iframe-C4yajH80.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CKXsneZC.js";import{R as l}from"./zIndexSlice-BfiJerBV.js";import{C as x}from"./ComposedChart-Drcu9Hk1.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dwnxi2Xk.js";import{L as a}from"./Line-B3Ju-sFB.js";import{X as c}from"./XAxis-BFxxSACP.js";import{T as g}from"./Tooltip-C3r4dDMD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B6ownNND.js";import"./Text-Bi36EJ7d.js";import"./resolveDefaultProps-DFc2Rexf.js";import"./DOMUtils-dS8ElQc-.js";import"./ZIndexLayer-DJSGJh4F.js";import"./index-CrNHa6S5.js";import"./index-CuVCW5fj.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CwKR_Q3z.js";import"./throttle-A9at9acq.js";import"./axisSelectors-C4wAO8K7.js";import"./d3-scale-fBzFIMPy.js";import"./CartesianAxis-CiDuuMHX.js";import"./Layer-D0yKuovh.js";import"./types-CL_v27h0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-cx0ctRz4.js";import"./index-BrlBHB3n.js";import"./index-Bb-mYyLv.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-EDwJ-hpd.js";import"./index-CQyck0VW.js";import"./fillDefinitions-BST5zs50.js";import"./CartesianChart-CEN-h0dg.js";import"./ZIndexPortal-DAymcjH6.js";import"./CategoricalChart-PCFFppyT.js";import"./LabelList-C_dQABL5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Co2_9m8t.js";import"./useAnimationId-BUxfS1h6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PoKmoeJ-.js";import"./tooltipContext-CWv0OsXH.js";import"./dataEntryStyles-2Nz1ZzWI.js";import"./ErrorBarContext-ELy3xUI7.js";import"./activeStyles-DvcaieBh.js";import"./SetGraphicalItem-aXzYe790.js";import"./getZIndexFromUnknown-D-oKNjXm.js";import"./useEffectiveDataKey-RrCx3xE8.js";import"./omit-CfBlZ-ZR.js";import"./isArguments-yB-y1yaH.js";import"./Curve-fl7qnDBk.js";import"./step-I8SAqNm5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Ve6xkJ_B.js";import"./Dot-CrVSKUlv.js";import"./Symbols-B1Np59zp.js";import"./symbol-CD9hHhVA.js";import"./getRadiusAndStrokeWidthFromDot-BI02GC_O.js";import"./useElementOffset-jHj6xKf0.js";import"./uniqBy-B9zpECzU.js";import"./iteratee-Cick1OQS.js";import"./Cross-CJWJdMdd.js";import"./Sector-CnqTZ0oD.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
