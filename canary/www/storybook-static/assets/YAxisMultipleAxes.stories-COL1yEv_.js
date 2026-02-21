import{e as t}from"./iframe-BC-5LcYb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-DdqcUQaJ.js";import{R as l}from"./arrayEqualityCheck-ChXaihMZ.js";import{C as x}from"./ComposedChart-CeA0TXnQ.js";import{B as o}from"./Bar-50r5KJ5K.js";import{L as a}from"./Line-valcrcoh.js";import{X as c}from"./XAxis-c4svWBsh.js";import{T as A}from"./Tooltip-CRf-8OOa.js";import{R as g}from"./RechartsHookInspector-B75ZFa4B.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B0mR8vIz.js";import"./Layer-DTseK4B8.js";import"./resolveDefaultProps-CZYO2Ka-.js";import"./Text-BCKsJQhx.js";import"./DOMUtils-BFDtjzpb.js";import"./Label-DpYIsLw2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dl-ZMGAP.js";import"./zIndexSlice-BntL5RH1.js";import"./immer-ZiBWKhHb.js";import"./types-DPX13aC-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D9tlxui6.js";import"./hooks-rB50_RV3.js";import"./axisSelectors-CxQAx9lZ.js";import"./d3-scale-PqmOg0fe.js";import"./RechartsWrapper-B8Da5X0m.js";import"./index-DddLbDqU.js";import"./CartesianChart-B_l4BcVo.js";import"./chartDataContext-w--Sw2J9.js";import"./CategoricalChart-CIq8dObJ.js";import"./tooltipContext-D_ugRJhv.js";import"./ReactUtils-DTBTVl0S.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-i3MObavq.js";import"./isPlainObject-CJKJH7Oc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BjlfkU01.js";import"./useAnimationId-1buHKKGB.js";import"./Trapezoid-JczkhOAH.js";import"./Sector-BhUjloQr.js";import"./Symbols-CjqMpyW7.js";import"./symbol-BKo09A-g.js";import"./step-CVSHTaSO.js";import"./Curve-28zddxeA.js";import"./RegisterGraphicalItemId-Bcc7KsZV.js";import"./ErrorBarContext-B8bfqZ6V.js";import"./GraphicalItemClipPath-DkytICF2.js";import"./SetGraphicalItem--aBLcxY1.js";import"./getZIndexFromUnknown-jhYLdK9L.js";import"./graphicalItemSelectors-Cp-rtP27.js";import"./ActivePoints-CiWs6vAv.js";import"./Dot-DN8gKT9r.js";import"./getRadiusAndStrokeWidthFromDot-D-M3bT9T.js";import"./useElementOffset-BxrTFY18.js";import"./uniqBy-EzjyjqXa.js";import"./iteratee-DiuVQ9oe.js";import"./Cross-Ba7Nru0r.js";import"./index-D_pdBQCR.js";import"./ChartSizeDimensions-DlGGqx96.js";import"./OffsetShower-vrKiwX_5.js";import"./PlotAreaShower-D4359Ub-.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
