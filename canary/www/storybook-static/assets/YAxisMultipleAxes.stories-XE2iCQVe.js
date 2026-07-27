import{R as t}from"./iframe-C_py9VKy.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-1vUjo3Fh.js";import{R as l}from"./zIndexSlice-CXPNbLh0.js";import{C as x}from"./ComposedChart-Dh9zcQ5L.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DJUBgmNl.js";import{L as a}from"./Line-COmMeHls.js";import{X as c}from"./XAxis-BQTm69sE.js";import{T as g}from"./Tooltip-D5bH_ViD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DS2REUGr.js";import"./Layer-CJpPulsx.js";import"./resolveDefaultProps-DKxyIA_C.js";import"./Text-CnffV04t.js";import"./DOMUtils-B2RmK7a8.js";import"./isWellBehavedNumber-wktK8CV7.js";import"./Label-DaE8MMQO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-cfs89nNi.js";import"./index-om3Avrtj.js";import"./index-DFxAgAdx.js";import"./types-BjPO6Abx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-XRbHFGyF.js";import"./throttle-y-97qzKM.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CyYB6xNR.js";import"./index-ConrPCjE.js";import"./index-B6PDA8Su.js";import"./axisSelectors-B-GKTKT_.js";import"./d3-scale-pH2VCnNX.js";import"./CartesianChart-Dc2BthVN.js";import"./chartDataContext-CG11iTCQ.js";import"./CategoricalChart-DJCSwk8E.js";import"./tooltipContext-Bu0nve_k.js";import"./AnimatedItems-BApiggtL.js";import"./useAnimationId-BmA3o4RX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dwgjvbsc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-SIhXzT4o.js";import"./RegisterGraphicalItemId-BKPrbhTB.js";import"./ErrorBarContext-SwQJmcJ0.js";import"./GraphicalItemClipPath-oE60EnJf.js";import"./SetGraphicalItem-B_lgAFV8.js";import"./getZIndexFromUnknown-CVsUYSi-.js";import"./graphicalItemSelectors-RdnKikYv.js";import"./Curve-Ca8nGQE4.js";import"./step-CMEfwDT5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-VBrZY_w6.js";import"./Dot-CgRov5lu.js";import"./getRadiusAndStrokeWidthFromDot-CRhSkevf.js";import"./useElementOffset-Z_Rs-D5L.js";import"./uniqBy-DjIUo5Dj.js";import"./iteratee-ZqN9mw6Q.js";import"./Cross-DS3tGU5b.js";import"./Sector-PxeYqRgC.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
