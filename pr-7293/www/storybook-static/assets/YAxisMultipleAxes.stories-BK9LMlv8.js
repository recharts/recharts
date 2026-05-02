import{e as t}from"./iframe-BBzssXFz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DM7CZp2-.js";import{R as l}from"./arrayEqualityCheck-Bjl1KGHu.js";import{C as x}from"./ComposedChart-BNnTKuEE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D22_560x.js";import{L as a}from"./Line-otGxT1G3.js";import{X as A}from"./XAxis-BKkUGHg6.js";import{T as g}from"./Tooltip-KN4fp32J.js";import{R as f}from"./RechartsHookInspector-Cq_u8Fnd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Dax8GbgD.js";import"./Layer-CAh1Kgp_.js";import"./resolveDefaultProps-Csr8SK85.js";import"./Text-Boz5VXT5.js";import"./DOMUtils-DJmkFWFo.js";import"./Label-B9ZSBmHd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C1_Q11sr.js";import"./zIndexSlice-BlJdEm2b.js";import"./immer-7XFVXXFB.js";import"./types-CER3-J_V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D_eYSGtp.js";import"./hooks-Cdjbv1yZ.js";import"./axisSelectors-CFvd2CpI.js";import"./d3-scale-CV33LrVl.js";import"./RechartsWrapper-CsBkMUfg.js";import"./index-CafXZux5.js";import"./CartesianChart-D4Tq8Mp4.js";import"./chartDataContext-DUrxX3r4.js";import"./CategoricalChart-B-bxACDj.js";import"./tooltipContext-D0k-ChEM.js";import"./ReactUtils-CabJhVob.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C0KQrGSC.js";import"./isPlainObject-CwCFEtjI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnC0X1TR.js";import"./useAnimationId-G1z57dIT.js";import"./Trapezoid-CWYXYqYR.js";import"./Sector-DeNvZ5DZ.js";import"./Symbols-CoEYrWYs.js";import"./symbol-C10iTT4Z.js";import"./step-Dmy2-h0-.js";import"./Curve-Dzo1_9a0.js";import"./RegisterGraphicalItemId-5EdXQ8V-.js";import"./ErrorBarContext-CM0hmmky.js";import"./GraphicalItemClipPath-DFMtaTzW.js";import"./SetGraphicalItem-C2_0J6B5.js";import"./getZIndexFromUnknown-Cjs2fupU.js";import"./graphicalItemSelectors-22dngLJU.js";import"./ActivePoints-DCbS44DF.js";import"./Dot-BOUDlr0E.js";import"./getRadiusAndStrokeWidthFromDot-DBbOA2H8.js";import"./useElementOffset-CjjZnAan.js";import"./uniqBy-C66l8_Y0.js";import"./iteratee-41QGm2LS.js";import"./Cross-CsHBJT9I.js";import"./index-BMusN9RV.js";import"./ChartSizeDimensions-DX20IRBn.js";import"./OffsetShower-0ikHXz0q.js";import"./PlotAreaShower-ddoTAOnv.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
