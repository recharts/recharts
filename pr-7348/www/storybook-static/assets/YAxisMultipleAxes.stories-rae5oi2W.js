import{e as t}from"./iframe-CUlKjRv5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CKyv_Ble.js";import{g as l}from"./arrayEqualityCheck-DBgCs58d.js";import{C as x}from"./ComposedChart-D68WBCYe.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-DwYBALo4.js";import{L as a}from"./Line-CA-fClkz.js";import{X as A}from"./XAxis-CO_kz_i5.js";import{T as g}from"./Tooltip-CNAuMk0m.js";import{R as f}from"./RechartsHookInspector-DIUnr0hb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BeQQMY3-.js";import"./Layer-BRPUehgK.js";import"./resolveDefaultProps-_1GgMiat.js";import"./Text-D0vEHMRY.js";import"./DOMUtils-2QlatUUm.js";import"./Label-CsCoT34Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dzag2pwA.js";import"./zIndexSlice-ygbvIPwo.js";import"./immer-DSTsi-PZ.js";import"./types-cseKagnM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-j7r-ksqS.js";import"./hooks-CnLCGSHs.js";import"./axisSelectors-DDDlTFJI.js";import"./d3-scale-BHCIS0TK.js";import"./RechartsWrapper-CERDCORy.js";import"./index-k3Ta7lxE.js";import"./CartesianChart-DIQmD_un.js";import"./chartDataContext-CEx1iXe-.js";import"./CategoricalChart-B3EUrP3A.js";import"./tooltipContext-CW5tzjbG.js";import"./ReactUtils-Dhd-bIVM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-6qGjBTVG.js";import"./isPlainObject-D3iLjTkd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BeDuyTKv.js";import"./useAnimationId-527k5CUF.js";import"./Trapezoid-Bhuw_sBY.js";import"./Sector-DGUTJhGS.js";import"./Symbols-SwNF5E59.js";import"./symbol-ByAU1LjM.js";import"./step-ndBpbuBv.js";import"./Curve-Dj9MPAvc.js";import"./RegisterGraphicalItemId-0Us56BlX.js";import"./ErrorBarContext-CXV3xnHJ.js";import"./GraphicalItemClipPath-CUJ2i_OT.js";import"./SetGraphicalItem-DXTqVkON.js";import"./getZIndexFromUnknown-TVijfWfN.js";import"./graphicalItemSelectors-ByldMGNB.js";import"./ActivePoints-CrLAHFM3.js";import"./Dot-Cv9C9-P8.js";import"./getRadiusAndStrokeWidthFromDot-CsjgyuMP.js";import"./useElementOffset-Crgg6g68.js";import"./uniqBy-BeSJAQ9R.js";import"./iteratee-D8Z_DKuL.js";import"./Cross-B6AOWwW3.js";import"./index-CsGwSrdN.js";import"./ChartSizeDimensions-7oIIj1ej.js";import"./OffsetShower-CPkU8Ejw.js";import"./PlotAreaShower-BQaO0vts.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
