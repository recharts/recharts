import{R as t}from"./iframe-DRSW8ue2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B6_VA_0t.js";import{R as l}from"./zIndexSlice-Bu-rrRtT.js";import{C as x}from"./ComposedChart-kVHcj-R_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CpDwOsz5.js";import{L as a}from"./Line-BDixv5uA.js";import{X as c}from"./XAxis-CC1uze90.js";import{T as g}from"./Tooltip-D7J-8-px.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CAXmUWDV.js";import"./Layer-BXqs-IsN.js";import"./resolveDefaultProps-raTiTqbb.js";import"./Text-DjqRVUg-.js";import"./DOMUtils-CyGXHzmH.js";import"./isWellBehavedNumber-DAnude9s.js";import"./Label-DWIM-PiW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CrpBbv8w.js";import"./index-90eqwCh0.js";import"./index-p0Ur2FF4.js";import"./types-CaXHGphp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dq99djjA.js";import"./throttle-CUiRuHKg.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DT9xTVvF.js";import"./index-CyOXcHUd.js";import"./index-iUHBfWdS.js";import"./axisSelectors-D9B32UgG.js";import"./d3-scale-C6_vDDuq.js";import"./CartesianChart-CHa2q2rq.js";import"./chartDataContext-BFVcvsqe.js";import"./CategoricalChart-CyaAwA7K.js";import"./tooltipContext-BiBOO61Q.js";import"./AnimatedItems-Dm8lwSRg.js";import"./useAnimationId-Dnplssp6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EoVmD57K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CyqwB66-.js";import"./RegisterGraphicalItemId-D6Xem68n.js";import"./ErrorBarContext-CZiW4Ksz.js";import"./GraphicalItemClipPath-D8tm2vL2.js";import"./SetGraphicalItem-CM2WyRpW.js";import"./getZIndexFromUnknown-Dhi9L3dq.js";import"./graphicalItemSelectors-63b_Enxj.js";import"./Curve-BBQJYMka.js";import"./step-D-9g_k4w.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bj6N22Y9.js";import"./Dot-BBNcCK9J.js";import"./getRadiusAndStrokeWidthFromDot-BL9YvDb6.js";import"./useElementOffset-BlZZNFfN.js";import"./uniqBy-CesywXT2.js";import"./iteratee-badt6V5j.js";import"./Cross-Sl84kG4H.js";import"./Sector-Dj-zA7B-.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
