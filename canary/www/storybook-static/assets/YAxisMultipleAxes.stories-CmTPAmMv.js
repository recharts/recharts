import{e as t}from"./iframe-5nyyyA4e.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-D9arQ46Y.js";import{R as l}from"./arrayEqualityCheck-DhH-5wr2.js";import{C as x}from"./ComposedChart-Cxl5hqIP.js";import{B as o}from"./Bar-C5S2PrX-.js";import{L as a}from"./Line-Bd-6aEXe.js";import{X as c}from"./XAxis-CpInK2W7.js";import{T as A}from"./Tooltip-Er2GaErC.js";import{R as g}from"./RechartsHookInspector-Bic4nxDU.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D47MJU_E.js";import"./Layer-DviFQGNi.js";import"./resolveDefaultProps-CeTTuEfb.js";import"./Text-CE1WfcL6.js";import"./DOMUtils-Dq_WTVX1.js";import"./Label-CduFeyI1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OUT57C2H.js";import"./zIndexSlice-C6txXD1x.js";import"./immer-2somCEQQ.js";import"./types-BpXzUYak.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cm-fMS3n.js";import"./hooks-CdfksvpZ.js";import"./axisSelectors-CobE02gZ.js";import"./d3-scale-puoPpyC3.js";import"./RechartsWrapper-DbfL-s84.js";import"./index-DrSxOYtm.js";import"./CartesianChart-CFvpoJB5.js";import"./chartDataContext-SxjdhjDb.js";import"./CategoricalChart-DI7k_Lzd.js";import"./tooltipContext-DolDc2BZ.js";import"./ReactUtils-BrfFtQHh.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DGjL05Fk.js";import"./isPlainObject-BQonFNMT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJXxZxcM.js";import"./useAnimationId-C32uUUSq.js";import"./Trapezoid-BDtTj6J0.js";import"./Sector-STsIidKv.js";import"./Symbols-CXSqTNLX.js";import"./symbol-DYTo8Fkb.js";import"./step-CMCDVxPb.js";import"./Curve-CtxNRaVC.js";import"./RegisterGraphicalItemId-Co9Ixth9.js";import"./ErrorBarContext-CfPRQDi6.js";import"./GraphicalItemClipPath-4mU8FIdV.js";import"./SetGraphicalItem-YjHvOXLE.js";import"./getZIndexFromUnknown-fBq3HJIi.js";import"./graphicalItemSelectors-Bbe84aqu.js";import"./ActivePoints-C08M__J8.js";import"./Dot-YnFnwCT3.js";import"./getRadiusAndStrokeWidthFromDot-BSz_BA2S.js";import"./useElementOffset-BTKbSGPa.js";import"./uniqBy-DdFUbo3O.js";import"./iteratee-B-bQO1-C.js";import"./Cross-CmROOS6c.js";import"./index-ltgFEkuv.js";import"./ChartSizeDimensions-CHqoYXte.js";import"./OffsetShower-pvxB70aB.js";import"./PlotAreaShower-CC7NhsKv.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
