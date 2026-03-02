import{e as t}from"./iframe-YHIi0zNq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-EBaaYeoG.js";import{R as l}from"./arrayEqualityCheck-CiMVM-SL.js";import{C as x}from"./ComposedChart-Dbe-cyVJ.js";import{B as o}from"./Bar-Ow4h9FCb.js";import{L as a}from"./Line-bVINaKw4.js";import{X as c}from"./XAxis-kqqXeMbl.js";import{T as A}from"./Tooltip-VKyMuC7a.js";import{R as g}from"./RechartsHookInspector-Cdc_RxXj.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DCRdhe3Y.js";import"./Layer-xP0kyya2.js";import"./resolveDefaultProps-BuJwUxEP.js";import"./Text-BfyXYVHl.js";import"./DOMUtils-B22dZqv4.js";import"./Label-DOPySTsx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ntDhn9GI.js";import"./zIndexSlice-DeqvswTX.js";import"./immer-D_GJadju.js";import"./types-D6q9wb44.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DxRvDe1C.js";import"./hooks-CFdjgn4I.js";import"./axisSelectors-87SRvgUu.js";import"./d3-scale-DMZnVruV.js";import"./RechartsWrapper-o-AfycQs.js";import"./index-u4istH96.js";import"./CartesianChart-Bvl8nfic.js";import"./chartDataContext-BapHi4AL.js";import"./CategoricalChart-BRn4vti9.js";import"./tooltipContext-CJg7C4G4.js";import"./ReactUtils-HN0dEhAf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BKfvV8h2.js";import"./isPlainObject-GBUylHQy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BtRVLgVP.js";import"./useAnimationId-ZghgqyXB.js";import"./Trapezoid-CkRbYMAh.js";import"./Sector-BgEwi5iM.js";import"./Symbols-jxhochxb.js";import"./symbol-B8nih3Ay.js";import"./step-ByfP7lrq.js";import"./Curve-fcCSfps7.js";import"./RegisterGraphicalItemId-LQPm_pAb.js";import"./ErrorBarContext-CYNYOD56.js";import"./GraphicalItemClipPath-Iw5JYGhP.js";import"./SetGraphicalItem-CUARmGp-.js";import"./getZIndexFromUnknown-BXOE4--R.js";import"./graphicalItemSelectors-CSTEPztl.js";import"./ActivePoints-B8MIZ72J.js";import"./Dot-D6GGo-vt.js";import"./getRadiusAndStrokeWidthFromDot-CvwGNHbQ.js";import"./useElementOffset-Bus-3Dt3.js";import"./uniqBy-B1iZPEDj.js";import"./iteratee-lh3PvcGG.js";import"./Cross-DBtFHX1V.js";import"./index-Cat5Cyt-.js";import"./ChartSizeDimensions-CGxCw1zc.js";import"./OffsetShower-450EX_p_.js";import"./PlotAreaShower-dE-HeGlr.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
