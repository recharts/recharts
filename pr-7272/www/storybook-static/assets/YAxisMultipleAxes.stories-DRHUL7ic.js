import{e as t}from"./iframe-C1fnHnKT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BUT98NPf.js";import{R as l}from"./arrayEqualityCheck-l6uT4Usv.js";import{C as x}from"./ComposedChart-DzEnoNHN.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-WA9GRV82.js";import{L as a}from"./Line-CMzeYv-o.js";import{X as A}from"./XAxis-CQ2fda0r.js";import{T as g}from"./Tooltip-Ddj6ae9D.js";import{R as f}from"./RechartsHookInspector-ewceuCfq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CluKEQWr.js";import"./Layer-BIYNx1xN.js";import"./resolveDefaultProps-0awOkESO.js";import"./Text-BUAHuXAg.js";import"./DOMUtils-CXwfjRJu.js";import"./Label-8_9z-Hx3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-UU7tiK14.js";import"./zIndexSlice-BoAv0LH1.js";import"./immer-hlXcvFio.js";import"./types-C6vI6gcr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DAUXyaQX.js";import"./hooks-D4TdCpxu.js";import"./axisSelectors-AIxg2YTu.js";import"./d3-scale-Br8Qy1nV.js";import"./RechartsWrapper-CsoN9NQZ.js";import"./index-C2jDSQT9.js";import"./CartesianChart-DJhd_WoR.js";import"./chartDataContext-DOE3KdCn.js";import"./CategoricalChart-oohW2fAH.js";import"./tooltipContext-DNVtyv9P.js";import"./ReactUtils-Dm1SJpk1.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CJoqVDNw.js";import"./isPlainObject-BdficFEb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BKvxhVC9.js";import"./useAnimationId-mn0ugSXH.js";import"./Trapezoid-DbflFOBZ.js";import"./Sector-BUT460qv.js";import"./Symbols-Bo3RkkJn.js";import"./symbol-D-2KK1gt.js";import"./step-BfW9Id0A.js";import"./Curve-CnB-6T_0.js";import"./RegisterGraphicalItemId-BcT6ipJt.js";import"./ErrorBarContext-BJ-bLhxe.js";import"./GraphicalItemClipPath-_2MLatM1.js";import"./SetGraphicalItem-ByOhwbI-.js";import"./getZIndexFromUnknown-B9c84-HK.js";import"./graphicalItemSelectors-BL-bJ5qU.js";import"./ActivePoints-CLnaFdlX.js";import"./Dot-CuqwvLTE.js";import"./getRadiusAndStrokeWidthFromDot-DMYxlHUI.js";import"./useElementOffset-B0dtN-Cu.js";import"./uniqBy-Dz2GWYge.js";import"./iteratee-DsiheMqS.js";import"./Cross-BtXXbHC_.js";import"./index-BXsfGSea.js";import"./ChartSizeDimensions-Dhy2eg61.js";import"./OffsetShower-C23rQ0FG.js";import"./PlotAreaShower-P9zfdMTd.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
