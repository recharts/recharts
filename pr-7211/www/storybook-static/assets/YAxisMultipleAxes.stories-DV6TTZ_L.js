import{e as t}from"./iframe-DzQrtuqC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-22Z8oCxY.js";import{R as l}from"./arrayEqualityCheck-CcYQ3TlE.js";import{C as x}from"./ComposedChart-EMFpw5dv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dj1yN0ji.js";import{L as a}from"./Line-Crc5gtVU.js";import{X as A}from"./XAxis-1ARD5tua.js";import{T as g}from"./Tooltip-CzufazAx.js";import{R as f}from"./RechartsHookInspector-CgIXv1De.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-kUZksY3_.js";import"./Layer-OTa1RIrC.js";import"./resolveDefaultProps-cBec3zUl.js";import"./Text-Boh5u1VK.js";import"./DOMUtils-Bn_VANWj.js";import"./Label-1lnwpSMQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DjjOHeZ_.js";import"./zIndexSlice-B16G16Z8.js";import"./immer-BG5eRMY4.js";import"./types-BgvOUMxI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-rqGxM86U.js";import"./hooks-D1HOa-TD.js";import"./axisSelectors-C3BshaU1.js";import"./d3-scale-CxHdo-Jz.js";import"./RechartsWrapper-12D3Dnhb.js";import"./index-BWU1iYbm.js";import"./CartesianChart-CLLa3Dnc.js";import"./chartDataContext-BI_W2HnQ.js";import"./CategoricalChart-BSh5BNmY.js";import"./tooltipContext-BKZeMNlN.js";import"./ReactUtils-QGOY_45A.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B77F2Y7E.js";import"./isPlainObject-C8qmWClL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D6c5ofir.js";import"./useAnimationId-KT1IxfUT.js";import"./Trapezoid-rdFilDCH.js";import"./Sector-lNcT2dw2.js";import"./Symbols-CrC1lk7K.js";import"./symbol-BXGJBtQL.js";import"./step-B5omXXrI.js";import"./Curve-DTTWJNZu.js";import"./RegisterGraphicalItemId-DtvVzUCB.js";import"./ErrorBarContext-BM7URJDC.js";import"./GraphicalItemClipPath-eGbWt4-y.js";import"./SetGraphicalItem-Bcmgk1GN.js";import"./getZIndexFromUnknown-AIn6DJKf.js";import"./graphicalItemSelectors-nd73tp_U.js";import"./ActivePoints-C5TcXqSX.js";import"./Dot-DPafLRI7.js";import"./getRadiusAndStrokeWidthFromDot-DbVHh2EC.js";import"./useElementOffset-DuP6OLBs.js";import"./uniqBy-Bat9ka49.js";import"./iteratee-Cilelzxb.js";import"./Cross-DQAy_m1j.js";import"./index-DkvclcRw.js";import"./ChartSizeDimensions-BpnzS4UN.js";import"./OffsetShower-5gMBmZb0.js";import"./PlotAreaShower-BdP0xDxN.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
