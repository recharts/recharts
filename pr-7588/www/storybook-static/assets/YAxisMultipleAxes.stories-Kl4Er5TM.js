import{R as t}from"./iframe-AVXfkv0w.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-IC2DAOXe.js";import{R as l}from"./zIndexSlice-Cpy73fEL.js";import{C as x}from"./ComposedChart-T6jMjzBh.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D_JobrpT.js";import{L as a}from"./Line-Cq09MVYd.js";import{X as c}from"./XAxis-Ccg3sENg.js";import{T as g}from"./Tooltip-Co7Yg1ig.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CUHI9zvN.js";import"./Layer-ht4prXr-.js";import"./resolveDefaultProps-Dkqh2Ws0.js";import"./Text-Cc6gSuDY.js";import"./DOMUtils-BVwM3Jdl.js";import"./isWellBehavedNumber-C_0WrTwr.js";import"./Label-Bn0N3T-p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B0wR3MRM.js";import"./index-DVRYbkUW.js";import"./index-CAfC1Ith.js";import"./types-3aWcalA-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWAQroks.js";import"./throttle-CElZ_OGC.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Bri81Hil.js";import"./index-CFZrGIxH.js";import"./index-Dd93-if2.js";import"./axisSelectors-D5sH7YSt.js";import"./d3-scale-BOPObWse.js";import"./CartesianChart-DosAg0hI.js";import"./chartDataContext-bVF6MeRR.js";import"./CategoricalChart-B23xHRz2.js";import"./tooltipContext-Bt0KiDnZ.js";import"./AnimatedItems-XdBOicHp.js";import"./useAnimationId-DI1PqqVk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C0v_P9FW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CFy0QQ1U.js";import"./RegisterGraphicalItemId-Ba7mqd93.js";import"./ErrorBarContext-DhRbE3HA.js";import"./GraphicalItemClipPath-CZYMuLkO.js";import"./SetGraphicalItem-BnjtQKWx.js";import"./getZIndexFromUnknown-YPczkL-n.js";import"./graphicalItemSelectors-CHpgIakV.js";import"./Curve-B8QEUj55.js";import"./step-0iQNMmmi.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bwfb1T53.js";import"./Dot-B1Np5YQX.js";import"./getRadiusAndStrokeWidthFromDot-DI-Ci7Ho.js";import"./useElementOffset-DyzLG0E2.js";import"./uniqBy-CdBEraEs.js";import"./iteratee-uAse0fea.js";import"./Cross-BKXxMdc4.js";import"./Sector-BRdSyD44.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
