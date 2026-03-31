import{e as t}from"./iframe-R35hz9hm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BsChZZHK.js";import{R as l}from"./arrayEqualityCheck-l_dnVtmw.js";import{C as x}from"./ComposedChart-4PYTru1q.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bo2sX_Vx.js";import{L as a}from"./Line-CQqbPlip.js";import{X as A}from"./XAxis-iZqvrzZu.js";import{T as g}from"./Tooltip-BHaEgbPx.js";import{R as f}from"./RechartsHookInspector-DP3Qs2H_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BfU0E9Vd.js";import"./Layer-NhMRn63k.js";import"./resolveDefaultProps-DfULgVhS.js";import"./Text-CIuibZ8V.js";import"./DOMUtils-CUUuW9k8.js";import"./Label-CVLCzJ8S.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BeTprR_g.js";import"./zIndexSlice-DymzsNPY.js";import"./immer-CFK8uJ_y.js";import"./types-CncuKFdL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DFK-mhd6.js";import"./hooks-DwD3G30p.js";import"./axisSelectors-BZF7ob4Z.js";import"./d3-scale-DK92Q0IA.js";import"./RechartsWrapper-BzZW_8cp.js";import"./index-BFs7fXnY.js";import"./CartesianChart-dKVKHPad.js";import"./chartDataContext-B0058VjU.js";import"./CategoricalChart-BeKpYgsM.js";import"./tooltipContext-D1Y9qK8x.js";import"./ReactUtils-CnWgF_pv.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BCSEa4J9.js";import"./isPlainObject-HxgO3KZH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BRq5yFCv.js";import"./useAnimationId-bDa-RfQI.js";import"./Trapezoid-DsSNyfmU.js";import"./Sector-DcJh_DF9.js";import"./Symbols-uWpNLd5r.js";import"./symbol-CizJV2Ht.js";import"./step-BTcv05YG.js";import"./Curve-C1o9Us3j.js";import"./RegisterGraphicalItemId-CFhaP5Xg.js";import"./ErrorBarContext-ySjR7PXX.js";import"./GraphicalItemClipPath-C9lbZ9U9.js";import"./SetGraphicalItem-CXTqk9fv.js";import"./getZIndexFromUnknown-Bqn2hlwj.js";import"./graphicalItemSelectors-B4uC_GkR.js";import"./ActivePoints-CEGTpw3Q.js";import"./Dot-DYh4HsOt.js";import"./getRadiusAndStrokeWidthFromDot-DdT_lr8z.js";import"./useElementOffset-BvkeSyWD.js";import"./uniqBy-B7WsKYqq.js";import"./iteratee-BjdV9oEw.js";import"./Cross-eK7Jb6dc.js";import"./index-Dr19aGzn.js";import"./ChartSizeDimensions-CNipumKi.js";import"./OffsetShower-BtN_LmjI.js";import"./PlotAreaShower-DeWLuHk-.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
