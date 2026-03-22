import{e as t}from"./iframe-CgO1MpLR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-DlCb0Sdu.js";import{R as l}from"./arrayEqualityCheck-u-i53ess.js";import{C as x}from"./ComposedChart-_NVVn82o.js";import{B as o}from"./Bar-DeLzYozS.js";import{L as a}from"./Line-BmBLmpVt.js";import{X as c}from"./XAxis-2XcNPuPe.js";import{T as A}from"./Tooltip-TOxj-Y96.js";import{R as g}from"./RechartsHookInspector-CDDYORWo.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BWRdw-B1.js";import"./Layer-BnKx9soM.js";import"./resolveDefaultProps-DhOBRlG4.js";import"./Text-BsiCf19y.js";import"./DOMUtils-ClzY_4R6.js";import"./Label-DuKpvZQ2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-GawZf7gt.js";import"./zIndexSlice-Bk7fG6-8.js";import"./immer-CbOoSQee.js";import"./types-CR8KEC21.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BCt2n75F.js";import"./hooks-2os6LPs1.js";import"./axisSelectors-GgUYtUsd.js";import"./d3-scale-DrxfQAZk.js";import"./RechartsWrapper-CDt2FmMO.js";import"./index-DXMTaf8u.js";import"./CartesianChart-9rc0WcRq.js";import"./chartDataContext-BsDrumof.js";import"./CategoricalChart-B51A2DYk.js";import"./tooltipContext-C7kTWSUc.js";import"./ReactUtils-aHtS1QKc.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B380zvEd.js";import"./isPlainObject-BwngMX5y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-By3Xy3Xn.js";import"./useAnimationId-DCzIcKnG.js";import"./Trapezoid-CIGdjkmu.js";import"./Sector-D7mFZfC7.js";import"./Symbols-gxmwBdwn.js";import"./symbol-BbAFTquJ.js";import"./step-Do923Rg0.js";import"./Curve-DQA1Id8x.js";import"./RegisterGraphicalItemId-DbAYEj3z.js";import"./ErrorBarContext-CuzIsVL-.js";import"./GraphicalItemClipPath-Kfq1Q5v1.js";import"./SetGraphicalItem-BLM5KnkQ.js";import"./getZIndexFromUnknown-DLj5W9D_.js";import"./graphicalItemSelectors-D-J503vA.js";import"./ActivePoints-4Dquq-We.js";import"./Dot-i5e7mgOR.js";import"./getRadiusAndStrokeWidthFromDot-DB6-Bj1Z.js";import"./useElementOffset-DfZinX6A.js";import"./uniqBy-D_Tq5wIv.js";import"./iteratee-BApfnIwz.js";import"./Cross-B8G7Ixjy.js";import"./index-Co6Xoctr.js";import"./ChartSizeDimensions-BHD_hXk_.js";import"./OffsetShower-DcNg8xR5.js";import"./PlotAreaShower-Dqalehnj.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
