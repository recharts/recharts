import{e as t}from"./iframe-NG7xn8us.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-C_VVeJTb.js";import{R as l}from"./arrayEqualityCheck-DBfkDrHK.js";import{C as x}from"./ComposedChart-D59nZdGq.js";import{B as o}from"./Bar-B8QMRSYx.js";import{L as a}from"./Line-B1LTLamM.js";import{X as c}from"./XAxis-DsLntPLQ.js";import{T as A}from"./Tooltip-Ci6ekKAU.js";import{R as g}from"./RechartsHookInspector-DUqk6vIV.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-F1bzBjNH.js";import"./Layer-DoTh6aNf.js";import"./resolveDefaultProps-wED6QReO.js";import"./Text-C1Ij1VWt.js";import"./DOMUtils-BH2xyswp.js";import"./Label-mpYwp3tS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BXUSr-Ha.js";import"./zIndexSlice-a1m4fSW4.js";import"./immer-B8QNuQuL.js";import"./types-DHhKLS2Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BnMzv5_X.js";import"./hooks-BHzjNaS-.js";import"./axisSelectors-BO092XPC.js";import"./d3-scale-C8XpcDzx.js";import"./RechartsWrapper-BZXpt1WI.js";import"./index-DNpbdYzC.js";import"./CartesianChart-BQHwW8oQ.js";import"./chartDataContext-CXUKTGqi.js";import"./CategoricalChart-CYSdgUQn.js";import"./tooltipContext-CYaUy5K-.js";import"./ReactUtils-CiPsQej4.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DHpoPjkT.js";import"./isPlainObject-5-gXFuU7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C6QRuf4O.js";import"./useAnimationId-DOHX5rOk.js";import"./Trapezoid-CPIxctnZ.js";import"./Sector-CCDhVr63.js";import"./Symbols-DVT-5QSh.js";import"./symbol-BtGJ97KY.js";import"./step-CZRzZlp2.js";import"./Curve-CO2TUzXD.js";import"./RegisterGraphicalItemId-wCSwaH-X.js";import"./ErrorBarContext-D-lQEB7R.js";import"./GraphicalItemClipPath-CXScC-pK.js";import"./SetGraphicalItem-C8yfvTXJ.js";import"./getZIndexFromUnknown-Bx4e8rB_.js";import"./graphicalItemSelectors-CX62Lrvl.js";import"./ActivePoints-B4qq1bzg.js";import"./Dot-CLcJP3NH.js";import"./getRadiusAndStrokeWidthFromDot-CbR_-ksc.js";import"./useElementOffset-uyWx_3MZ.js";import"./uniqBy-Czp8UKKJ.js";import"./iteratee-CmItZdDE.js";import"./Cross-CQ2UXa9g.js";import"./index-D29y0xCx.js";import"./ChartSizeDimensions-DBi-EbUV.js";import"./OffsetShower-BpCRw-nU.js";import"./PlotAreaShower-sY7tlQH0.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
