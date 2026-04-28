import{e as t}from"./iframe-C-pXZx8X.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cf-PEWST.js";import{R as l}from"./arrayEqualityCheck-3ozDp3-_.js";import{C as x}from"./ComposedChart-2Cv-F1wi.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CRFMpqtg.js";import{L as a}from"./Line-BOal81Oz.js";import{X as A}from"./XAxis-Cso_vWau.js";import{T as g}from"./Tooltip--SzV9tI5.js";import{R as f}from"./RechartsHookInspector-BtUn4E77.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DSUJUk3Y.js";import"./Layer-B6gfj40j.js";import"./resolveDefaultProps-cEBRbYcQ.js";import"./Text-BgpDM3B5.js";import"./DOMUtils-DRd1JeLt.js";import"./Label-CSYOUhma.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C3MbX-IF.js";import"./zIndexSlice-DrJF7HQv.js";import"./immer-BPSGuEHb.js";import"./types-TOcuhXpR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DMz1msG5.js";import"./hooks-r8g2kJ2v.js";import"./axisSelectors-DSvN8duu.js";import"./d3-scale-DB0MXZYa.js";import"./RechartsWrapper-DAPnfiXY.js";import"./index-BNdn82my.js";import"./CartesianChart-DOSPFIH6.js";import"./chartDataContext-DGhRpyKC.js";import"./CategoricalChart-DtUHVQpT.js";import"./tooltipContext-BunrfaQ9.js";import"./ReactUtils-H7Wf3vTm.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-ytK3Mr7g.js";import"./isPlainObject-CpM-pRk6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DKyirF4T.js";import"./useAnimationId-Cz59vryg.js";import"./Trapezoid-DrJg1aIg.js";import"./Sector-D1AnDLTs.js";import"./Symbols-B0EVt28X.js";import"./symbol-Cn7BoW2g.js";import"./step-CZ17sXck.js";import"./Curve-CX8mbWGt.js";import"./RegisterGraphicalItemId-DGn9oQ3L.js";import"./ErrorBarContext-DCKdVGWu.js";import"./GraphicalItemClipPath-DVPpijAl.js";import"./SetGraphicalItem-BA0j0x-s.js";import"./getZIndexFromUnknown-B_-dA5m_.js";import"./graphicalItemSelectors-CUmdQ9g7.js";import"./ActivePoints-DJBfU3jH.js";import"./Dot-DLckMiiT.js";import"./getRadiusAndStrokeWidthFromDot-C9K8kJrs.js";import"./useElementOffset-CrfjAq51.js";import"./uniqBy-39GcZYmA.js";import"./iteratee-DR1zOXOU.js";import"./Cross-CGSEnekc.js";import"./index-jtYe93T2.js";import"./ChartSizeDimensions-7zC2ccyN.js";import"./OffsetShower--ZPGXMQT.js";import"./PlotAreaShower-tlilFsff.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
