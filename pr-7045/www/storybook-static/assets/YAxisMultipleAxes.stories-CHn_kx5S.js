import{e as t}from"./iframe-8sIubbdi.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-CDYxK6mN.js";import{R as l}from"./arrayEqualityCheck-DbCj9c-Y.js";import{C as x}from"./ComposedChart-uiW_8j2H.js";import{B as o}from"./Bar-wknO_GDz.js";import{L as a}from"./Line-CH8gt70I.js";import{X as c}from"./XAxis-IWyMdbO5.js";import{T as A}from"./Tooltip-CC9FVXo5.js";import{R as g}from"./RechartsHookInspector-AlYSKZYm.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DgCpBkCM.js";import"./Layer-BRXiwqet.js";import"./resolveDefaultProps-DuCQFLVY.js";import"./Text-3TK1Y5vF.js";import"./DOMUtils-DytWm70I.js";import"./Label-DilR1ra4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ts04gVrK.js";import"./zIndexSlice-VsYA40So.js";import"./immer-BT2n2B7O.js";import"./types-Bp02LWfB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CfkkEf9Z.js";import"./hooks-D_DW5Oi2.js";import"./axisSelectors-DxwSejiD.js";import"./d3-scale-DEnCLOEW.js";import"./RechartsWrapper-D30EcdBX.js";import"./index-CbU0dTJ6.js";import"./CartesianChart-CXlojrwJ.js";import"./chartDataContext-4cME9qvC.js";import"./CategoricalChart-C7NQof8g.js";import"./tooltipContext-Do3gtYgl.js";import"./ReactUtils-BXvpQNi2.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils---ZXszSA.js";import"./isPlainObject-rB9NvpQh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2TS-ysJA.js";import"./useAnimationId-De5EZ4DF.js";import"./Trapezoid-DG6NQ2ho.js";import"./Sector-CO7y0BXS.js";import"./Symbols-DYzrjJ12.js";import"./symbol-CzQ70XR0.js";import"./step-CjuXRgh8.js";import"./Curve-BZpcUU-T.js";import"./RegisterGraphicalItemId-Cm3HEb7M.js";import"./ErrorBarContext-bky3Fevr.js";import"./GraphicalItemClipPath-C8kD9Qqm.js";import"./SetGraphicalItem-CsZep-cL.js";import"./getZIndexFromUnknown-BJWnkP_F.js";import"./graphicalItemSelectors-CPoOjEEq.js";import"./ActivePoints-KfMw2aSf.js";import"./Dot-TuBc5AFD.js";import"./getRadiusAndStrokeWidthFromDot-7blQF-c9.js";import"./useElementOffset-BE_YSGNC.js";import"./uniqBy-BpX7jN5I.js";import"./iteratee-B7Z3RNWE.js";import"./Cross-ChGQm2LJ.js";import"./index-QIusEcOA.js";import"./ChartSizeDimensions-B-IxYWC1.js";import"./OffsetShower-CFWyxT0Z.js";import"./PlotAreaShower-CXMf_89y.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
