import{e as t}from"./iframe-ZP7E3tAE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-BhI8CLrp.js";import{R as l}from"./arrayEqualityCheck-BZegdwCU.js";import{C as x}from"./ComposedChart-Ict3xZeX.js";import{B as o}from"./Bar-BSvXFc5g.js";import{L as a}from"./Line-8udFf86z.js";import{X as c}from"./XAxis-CN_uVChz.js";import{T as A}from"./Tooltip-DDgIq-hW.js";import{R as g}from"./RechartsHookInspector-Bzs4iZ_z.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BqPQSvc8.js";import"./Layer-BHiu2mcd.js";import"./resolveDefaultProps-79J5uOQE.js";import"./Text-Fmn2R1e8.js";import"./DOMUtils-B5v93EaI.js";import"./Label-DQuLGrHO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CQ2HcABX.js";import"./zIndexSlice-DYNjVLba.js";import"./immer-DfBDygba.js";import"./types-BY0ZtJ6u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DWiQ850g.js";import"./hooks-DCx4ALdg.js";import"./axisSelectors-jiBsETiM.js";import"./d3-scale-Y646Y1FN.js";import"./RechartsWrapper-CXTZX0lw.js";import"./index-B6UrQqZ7.js";import"./CartesianChart-CyeIpcsP.js";import"./chartDataContext-Cn5Bk3lF.js";import"./CategoricalChart-BiLT_62I.js";import"./tooltipContext-Da4xql8I.js";import"./ReactUtils-Jyyk6uCy.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DrBMRVee.js";import"./isPlainObject-DdPleWLd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MC9ihyGv.js";import"./useAnimationId-DzP9W11z.js";import"./Trapezoid-DEV19aif.js";import"./Sector-BSueo3lX.js";import"./Symbols-DjU9F7j-.js";import"./symbol-Db4XPyyX.js";import"./step-DXK9R3Qh.js";import"./Curve-BPu6gFcf.js";import"./RegisterGraphicalItemId-Cw_F4O-7.js";import"./ErrorBarContext-BLxncd0z.js";import"./GraphicalItemClipPath-D_6vSzHc.js";import"./SetGraphicalItem-Cf9rfdg9.js";import"./getZIndexFromUnknown-BrHSs6_e.js";import"./graphicalItemSelectors-Dv8aneyv.js";import"./ActivePoints-DeU0k1bK.js";import"./Dot-DDX9j8Ax.js";import"./getRadiusAndStrokeWidthFromDot-DY7k2y1V.js";import"./useElementOffset-DUus7wqV.js";import"./uniqBy-BwvjcPiA.js";import"./iteratee-BocZf6ff.js";import"./Cross-IWz9MMXP.js";import"./index-B9IDBt-R.js";import"./ChartSizeDimensions-B4BdsRyY.js";import"./OffsetShower-CpH9si2J.js";import"./PlotAreaShower-DFApfivg.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
