import{R as t}from"./iframe-Dli_FHsd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BgeWKEji.js";import{R as l}from"./zIndexSlice-BKyYlhak.js";import{C as x}from"./ComposedChart-BEb2rMPq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-1ME6_kJ4.js";import{L as a}from"./Line-WVA6lS0G.js";import{X as c}from"./XAxis-CgWc3L0L.js";import{T as g}from"./Tooltip-qV_4VdeC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D8Bu4bN4.js";import"./CartesianAxis-CDtTSBJJ.js";import"./Layer-D_tWiSqM.js";import"./resolveDefaultProps-KCoOvOQy.js";import"./Text-mDBdIk3r.js";import"./DOMUtils-CD-Gvcib.js";import"./isWellBehavedNumber-DwKce9OS.js";import"./Label-BlCBYS7y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-56CQrnNK.js";import"./index-B6ei3fzd.js";import"./index-eEp7ik7X.js";import"./types-CxkhEKh5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cr_zgIG9.js";import"./immer-BDVTnirG.js";import"./RechartsWrapper-gcMhRjLK.js";import"./index-654UjlcV.js";import"./index-TBfimrOP.js";import"./axisSelectors-BOuTa97x.js";import"./d3-scale-BaROhcEs.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B0dTZgGZ.js";import"./chartDataContext-Dh-3jSeu.js";import"./CategoricalChart-YvrRZEH2.js";import"./tooltipContext-2ddqG6Hj.js";import"./AnimatedItems-DgK_VlyJ.js";import"./useAnimationId-CYxQwOrZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BgP4O_cb.js";import"./ActiveShapeUtils-pciG5q6n.js";import"./RegisterGraphicalItemId-rjfoubwa.js";import"./ErrorBarContext-DHC85wCi.js";import"./GraphicalItemClipPath-BJpRRLBw.js";import"./SetGraphicalItem-DN3sQjPD.js";import"./getZIndexFromUnknown-C5ov2ohz.js";import"./graphicalItemSelectors-C7BisFgc.js";import"./Curve-V2biDmKc.js";import"./step-DJ-Uc0dW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dhrwjh9s.js";import"./Dot-C9Ldg7B9.js";import"./getRadiusAndStrokeWidthFromDot-BTi0vxmW.js";import"./useElementOffset-B5TeNF6O.js";import"./uniqBy-wl0EV1X7.js";import"./iteratee-C41o_cYR.js";import"./Cross-BQHAWZSw.js";import"./Sector-DM3nS8n2.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
