import{e as t}from"./iframe-DpWgHt6w.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-YoDPLsa3.js";import{R as l}from"./arrayEqualityCheck-DwmAcYIn.js";import{C as x}from"./ComposedChart-D-F8RHVS.js";import{B as o}from"./Bar-CefeY-6c.js";import{L as a}from"./Line-CqInfh-U.js";import{X as c}from"./XAxis-D6yPajmq.js";import{T as A}from"./Tooltip-CMAZBnKM.js";import{R as g}from"./RechartsHookInspector-6ffAoSqV.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Boaam3Pv.js";import"./Layer-CgpQp7eP.js";import"./resolveDefaultProps-COHSVhtV.js";import"./Text-BFrtQgrO.js";import"./DOMUtils-B14zrq1j.js";import"./Label-D5phAYj6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CK7DJrWn.js";import"./zIndexSlice-QDaeSxhx.js";import"./immer-DDDJMxmJ.js";import"./types-DZ2OBnNV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DdqXW_Ob.js";import"./hooks-BAFDLItO.js";import"./axisSelectors-xFLTDAtC.js";import"./d3-scale-cdM3iwUh.js";import"./RechartsWrapper-0YIbfluk.js";import"./index-CN4qQn03.js";import"./CartesianChart-Cb4Oxfp_.js";import"./chartDataContext-Dv1BkF7u.js";import"./CategoricalChart-Cws7_zW3.js";import"./tooltipContext-CQEG5yO5.js";import"./ReactUtils-DCSGTX2b.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-LLoi1e2l.js";import"./isPlainObject-B9PQnOFQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BwaSbVPa.js";import"./useAnimationId-DyHfJJP5.js";import"./Trapezoid-BUbhVMuQ.js";import"./Sector-c9hexcBL.js";import"./Symbols-DT0KAb22.js";import"./symbol-Btcnnf07.js";import"./step-InUwQjei.js";import"./Curve-BqRAMsJi.js";import"./RegisterGraphicalItemId-Bt0sIJ7x.js";import"./ErrorBarContext-DzKYs5DP.js";import"./GraphicalItemClipPath-DC27cx5Q.js";import"./SetGraphicalItem-BnrGj-ZR.js";import"./getZIndexFromUnknown-CEyh7OJG.js";import"./graphicalItemSelectors-DMouLN-S.js";import"./ActivePoints-XzMc0Z9j.js";import"./Dot-DSk185c8.js";import"./getRadiusAndStrokeWidthFromDot-BPyIAaab.js";import"./useElementOffset-Cy-Pbb11.js";import"./uniqBy-P7Rpg-nk.js";import"./iteratee-CvqUUzUs.js";import"./Cross-BejlkNkc.js";import"./index-DtY3ArMC.js";import"./ChartSizeDimensions-B93BH9rD.js";import"./OffsetShower-BhzT3OUi.js";import"./PlotAreaShower-BHWXXqUJ.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
