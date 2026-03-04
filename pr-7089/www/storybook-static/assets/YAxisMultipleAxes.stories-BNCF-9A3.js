import{e as t}from"./iframe-BOKMyF_X.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-CBNt9JSX.js";import{R as l}from"./arrayEqualityCheck-CqOdBUpx.js";import{C as x}from"./ComposedChart-CM0vmQ8b.js";import{B as o}from"./Bar-DUWdjkug.js";import{L as a}from"./Line-Brl3Q2FA.js";import{X as c}from"./XAxis-CZEffDuF.js";import{T as A}from"./Tooltip-B9KNGIRi.js";import{R as g}from"./RechartsHookInspector-CyXtWZCT.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DfkQ8mC4.js";import"./Layer-jqqI8J4h.js";import"./resolveDefaultProps-D-2ZbLU8.js";import"./Text-v3vniUMj.js";import"./DOMUtils-BpFKs9GQ.js";import"./Label-D-SjomvA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BPVGtKRn.js";import"./zIndexSlice-5HlspQCC.js";import"./immer-BWwXhaAr.js";import"./types-BRMSpD9x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BzcMdbXv.js";import"./hooks-BSpUdl1W.js";import"./axisSelectors-DKV-tPdL.js";import"./d3-scale-DFwrAk_i.js";import"./RechartsWrapper-BbOfJK_v.js";import"./index-DyqnJuAH.js";import"./CartesianChart-DhtZ13KG.js";import"./chartDataContext-CzpIjlkZ.js";import"./CategoricalChart-BuHiBizY.js";import"./tooltipContext-BBzuwH_s.js";import"./ReactUtils-D8BtYMdD.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-B0yU484R.js";import"./isPlainObject-DIE9lg5n.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DaPP8vxp.js";import"./useAnimationId-CQeaLNgU.js";import"./Trapezoid-Ckkc98J5.js";import"./Sector-DFBFkrCL.js";import"./Symbols-Bgq4WsjW.js";import"./symbol-BbSh3W4q.js";import"./step-CSZdFR4k.js";import"./Curve-B4PvFjai.js";import"./RegisterGraphicalItemId-CT98v8Eq.js";import"./ErrorBarContext-hDWWdNkc.js";import"./GraphicalItemClipPath-C2O7VO_H.js";import"./SetGraphicalItem-C9j26hww.js";import"./getZIndexFromUnknown-_q828ooS.js";import"./graphicalItemSelectors-Ct946g8y.js";import"./ActivePoints-BkUW_jI5.js";import"./Dot-BV_14ZK_.js";import"./getRadiusAndStrokeWidthFromDot-BEKHGib6.js";import"./useElementOffset-ChJiiPNY.js";import"./uniqBy-BIhAFqL9.js";import"./iteratee-DRSvHZog.js";import"./Cross-Ds_TSBqr.js";import"./index-C_V29KK9.js";import"./ChartSizeDimensions-BzpSoNcH.js";import"./OffsetShower-DzkfGY4a.js";import"./PlotAreaShower-Djb9Eb2x.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
