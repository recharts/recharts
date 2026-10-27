import{R as t}from"./iframe-BhkmDUK8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CXhwTwOE.js";import{R as l}from"./zIndexSlice-Cx3NgCbD.js";import{C as x}from"./ComposedChart-BfTAH9AC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-mg0AFLko.js";import{L as a}from"./Line-DgKeyyKw.js";import{X as c}from"./XAxis-C6NctsPw.js";import{T as g}from"./Tooltip-CqtGb3xQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BVWylkM-.js";import"./Text-DMX7oKTI.js";import"./resolveDefaultProps-CBrUOLtb.js";import"./pageBackground-4Wz1Kk9n.js";import"./ZIndexLayer-CK_kCyLL.js";import"./index-BGM2KozU.js";import"./index-Co7lnbSI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BxjhUIGd.js";import"./throttle-BvBRI7mu.js";import"./dataEntryStyles-BVrjnugi.js";import"./axisSelectors-iANbDNdr.js";import"./d3-scale-6P_5w6kZ.js";import"./CartesianAxis-BmcJMrp5.js";import"./Layer-DN_2iRDC.js";import"./types-CU7_71qS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaGEcMV8.js";import"./index-CMvdSvcn.js";import"./index-DbiGNxfl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DFqlV8En.js";import"./index-EMj2ovmv.js";import"./CartesianChart-DAEGsrX3.js";import"./ZIndexPortal-B4U04QBk.js";import"./CategoricalChart-DsbjL1iZ.js";import"./LabelList-CB1bAazX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CulpOJA0.js";import"./useAnimationId-49rixTyB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRwsgq7-.js";import"./tooltipContext-W-jQ97Ft.js";import"./RegisterGraphicalItemId-BQIh3gpM.js";import"./ErrorBarContext-BtfMVugS.js";import"./activeStyles-Bn41iv6z.js";import"./SetGraphicalItem-B5IS3skS.js";import"./getZIndexFromUnknown-BQ3YpVib.js";import"./useEffectiveDataKey-C5G10thl.js";import"./omit-DVpTfk6D.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BHBAmygs.js";import"./step-Bs1-0DQI.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BLD8htC5.js";import"./Dot-Cu6BzPzv.js";import"./Symbols-DztLe2AE.js";import"./symbol-C9i3gtuu.js";import"./getRadiusAndStrokeWidthFromDot-B2MvN2Za.js";import"./useElementOffset-ButFEXKE.js";import"./uniqBy-DG4g_Lj4.js";import"./iteratee-B9qR9krY.js";import"./Cross-CQ1Th55I.js";import"./Sector-Dys_HLwg.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
