import{e as t}from"./iframe-B82KKzsZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-B1evlESR.js";import{R as l}from"./arrayEqualityCheck-Cg0idRhp.js";import{C as x}from"./ComposedChart-D9FBDa9m.js";import{B as o}from"./Bar-BJzUSmxc.js";import{L as a}from"./Line-FhoCkSnF.js";import{X as c}from"./XAxis-EvgP7bI2.js";import{T as A}from"./Tooltip-CbosIM56.js";import{R as g}from"./RechartsHookInspector-Dn_N91Ha.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DURtsiuN.js";import"./Layer-ug_gWv5Y.js";import"./resolveDefaultProps-Cz2WpobP.js";import"./Text-C1AVdMVq.js";import"./DOMUtils-DQZy4jxA.js";import"./Label-CoPQcGVn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CCx46f1u.js";import"./zIndexSlice-DoZOUHwV.js";import"./immer-Cjr4YINx.js";import"./types-DaFthwO7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D6QyWwDV.js";import"./hooks-C_Bk0iWL.js";import"./axisSelectors-BlY0RvlZ.js";import"./d3-scale-gdEhlQZC.js";import"./RechartsWrapper-Dy52E8zA.js";import"./index-BPhr2cwx.js";import"./CartesianChart-DjM6_Ohn.js";import"./chartDataContext-BVeH-QEp.js";import"./CategoricalChart-BF433tP-.js";import"./tooltipContext-BEEFraiB.js";import"./ReactUtils-CyWe8bPC.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CrpulZpz.js";import"./isPlainObject-6AK1zo7x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C-qAHqHP.js";import"./useAnimationId-BjMwuZHe.js";import"./Trapezoid-CL1eg36a.js";import"./Sector-SPbT55o6.js";import"./Symbols-dztR1yZz.js";import"./symbol-Djdr0qU4.js";import"./step-D_vNME6r.js";import"./Curve-BsV_hxX6.js";import"./RegisterGraphicalItemId-tJqvGPQR.js";import"./ErrorBarContext-DSt7HMag.js";import"./GraphicalItemClipPath-Chx7G7zK.js";import"./SetGraphicalItem-BNPEWY7y.js";import"./getZIndexFromUnknown-CeQsqkXW.js";import"./graphicalItemSelectors-DUfLVgT0.js";import"./ActivePoints-Bp-xuhXe.js";import"./Dot-BzE5qBfr.js";import"./getRadiusAndStrokeWidthFromDot-VGAN5l6V.js";import"./useElementOffset-DaSnC2vL.js";import"./uniqBy-CF2YBGTs.js";import"./iteratee-Csu2HEtD.js";import"./Cross-C07qCAF-.js";import"./index-BDwCI-pI.js";import"./ChartSizeDimensions-DGlceztD.js";import"./OffsetShower-BguOTWfQ.js";import"./PlotAreaShower-CC5s-Y7u.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
