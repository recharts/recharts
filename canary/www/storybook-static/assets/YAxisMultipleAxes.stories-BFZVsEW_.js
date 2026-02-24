import{e as t}from"./iframe-KW6q1dC8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-BTdozUYh.js";import{R as l}from"./arrayEqualityCheck-CsL9oElz.js";import{C as x}from"./ComposedChart--6sNek95.js";import{B as o}from"./Bar-CGGeXe-5.js";import{L as a}from"./Line-pTub0X7V.js";import{X as c}from"./XAxis-CfKcv1L2.js";import{T as A}from"./Tooltip-C-7pY7N_.js";import{R as g}from"./RechartsHookInspector-DHhOwwId.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CKh1nWaH.js";import"./Layer-6RQ8uR29.js";import"./resolveDefaultProps-DHg0Gmry.js";import"./Text-BNRPp-95.js";import"./DOMUtils-0gZHvISx.js";import"./Label-Bmj0n5iK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-w4JJl7sJ.js";import"./zIndexSlice-BRzCHmzO.js";import"./immer-DJQrWxfT.js";import"./types-Dwy1lCB-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-4nv5xzpG.js";import"./hooks-B87Kmuri.js";import"./axisSelectors-CGmw0y2t.js";import"./d3-scale-VvEjRtef.js";import"./RechartsWrapper-B3hZLvHH.js";import"./index-IRfq0wV0.js";import"./CartesianChart-e0ar_JeY.js";import"./chartDataContext-BSoSHoQo.js";import"./CategoricalChart-DZLAbsgr.js";import"./tooltipContext-Dx_SB0W0.js";import"./ReactUtils-_GmE1-On.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CDAKapsu.js";import"./isPlainObject-j8d21_8Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2IbtLxi.js";import"./useAnimationId-D6KMdx62.js";import"./Trapezoid-DNVzy1-l.js";import"./Sector-CjdyVVOd.js";import"./Symbols-BNAk55Bs.js";import"./symbol-5c1t0HLC.js";import"./step-B042Wr1e.js";import"./Curve-DF4GvF_O.js";import"./RegisterGraphicalItemId-YsmU15H8.js";import"./ErrorBarContext-DmVYT152.js";import"./GraphicalItemClipPath-C4dlV5mW.js";import"./SetGraphicalItem-BYLwEs4Z.js";import"./getZIndexFromUnknown-BPIwbzfM.js";import"./graphicalItemSelectors-BUu0Du50.js";import"./ActivePoints-BZL4jV5j.js";import"./Dot-BDQ-YubX.js";import"./getRadiusAndStrokeWidthFromDot-Csfskhtu.js";import"./useElementOffset-BZSwjmr-.js";import"./uniqBy-ZYepOa3_.js";import"./iteratee-C-vE-01O.js";import"./Cross-CtNRcITV.js";import"./index-8EwdUQHQ.js";import"./ChartSizeDimensions-RgqfN5JQ.js";import"./OffsetShower-BWgPsPSu.js";import"./PlotAreaShower-BcdTxtG3.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
