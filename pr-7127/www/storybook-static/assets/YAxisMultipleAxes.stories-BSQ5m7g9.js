import{e as t}from"./iframe-DhSnVUUY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-CXFxK72j.js";import{R as l}from"./arrayEqualityCheck-ItSr43uT.js";import{C as x}from"./ComposedChart-CygvqBNp.js";import{B as o}from"./Bar-FCA6sD8U.js";import{L as a}from"./Line-B0U88ML_.js";import{X as c}from"./XAxis-BK9sGi8f.js";import{T as A}from"./Tooltip-DhrsmUYo.js";import{R as g}from"./RechartsHookInspector-_iSQ6Sv6.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-wTVaN_w2.js";import"./Layer-DqA8yJsy.js";import"./resolveDefaultProps-DDCkM2ln.js";import"./Text-CBNPQM7i.js";import"./DOMUtils-D7qsrRP2.js";import"./Label-CbPieNct.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qqef8KVB.js";import"./zIndexSlice-CmnFYU-3.js";import"./immer-ffnfnJI7.js";import"./types-B9YiKk4f.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-aQirpCka.js";import"./hooks-DwPTB9f-.js";import"./axisSelectors-DHZbKxu8.js";import"./d3-scale-Ct4dajvC.js";import"./RechartsWrapper-yZud87Hm.js";import"./index-CW6mkywG.js";import"./CartesianChart-ctNiBsLN.js";import"./chartDataContext-Bt56Um39.js";import"./CategoricalChart-ChCgxSjg.js";import"./tooltipContext-Cx0YQoA4.js";import"./ReactUtils-BaLETgkD.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BCO2XZGI.js";import"./isPlainObject-DGz3R_rk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2VqkgWSF.js";import"./useAnimationId-DocxG_ZJ.js";import"./Trapezoid-DWk3aWgj.js";import"./Sector-D1ZNHkRR.js";import"./Symbols-Dh3_mjCF.js";import"./symbol-DWYWkMAQ.js";import"./step-CbaapRre.js";import"./Curve-BOb3x1Vv.js";import"./RegisterGraphicalItemId-BW5epSWy.js";import"./ErrorBarContext-CqudBFLS.js";import"./GraphicalItemClipPath-DatVZLDO.js";import"./SetGraphicalItem-C2kFHRye.js";import"./getZIndexFromUnknown-COBi3hxl.js";import"./graphicalItemSelectors-BT93NeYu.js";import"./ActivePoints-BvftcU8L.js";import"./Dot-DMOGBFVp.js";import"./getRadiusAndStrokeWidthFromDot-DsTA79K5.js";import"./useElementOffset-CdKfT37L.js";import"./uniqBy-zkYuhEQW.js";import"./iteratee-lYsZgTBf.js";import"./Cross-VsFbPZi8.js";import"./index-AtwlN2q9.js";import"./ChartSizeDimensions-DmcIrBX8.js";import"./OffsetShower-BxnZU9HH.js";import"./PlotAreaShower-CiIWRvtc.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
