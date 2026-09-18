import{R as t}from"./iframe-hd_pfHvo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bfby8-tG.js";import{R as l}from"./zIndexSlice-Dp2BKzs8.js";import{C as x}from"./ComposedChart-CLRu4YV9.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BRKuXka0.js";import{L as a}from"./Line-C_JAgIax.js";import{X as c}from"./XAxis-DIhH_NdP.js";import{T as g}from"./Tooltip-CNZscDqQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DeYie9Lh.js";import"./Text-C6732HHA.js";import"./resolveDefaultProps-drD7xYIQ.js";import"./DOMUtils-B5fqbFU1.js";import"./isWellBehavedNumber-C1tuJPSP.js";import"./useId-_Yta7G-c.js";import"./useBackwardsCompatibleTheme-SiYIdPDZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BHjO29Bs.js";import"./index-v0QewD8A.js";import"./index-SCBhOffb.js";import"./RechartsWrapper-CyksNjdk.js";import"./axisSelectors-eHIx7hMS.js";import"./throttle-C2q4COo1.js";import"./d3-scale-CciOkO_z.js";import"./index-C3NZEEPx.js";import"./index-Dl1k2Uag.js";import"./renderedTicksSlice-CD7ArbZx.js";import"./index-zFom7GTd.js";import"./CartesianAxis-Bczd13d5.js";import"./Layer-egOiXfr6.js";import"./types-B1tRcN2v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-lsa6cjfM.js";import"./chartDataContext-BzYnwGm5.js";import"./CategoricalChart-DK0H-Nig.js";import"./AnimatedItems-DCH1YBa_.js";import"./useAnimationId-D0lfWmyy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DOvVk1du.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BDpXGuZx.js";import"./tooltipContext-NM9A8S-z.js";import"./RegisterGraphicalItemId-_fhB3pIC.js";import"./ErrorBarContext-BU3wkqbx.js";import"./GraphicalItemClipPath-Bsg-Zi-D.js";import"./SetGraphicalItem-CYmPmGcd.js";import"./getZIndexFromUnknown-BFl9LL1A.js";import"./useGraphicalItemIdentity-hHj77cNE.js";import"./Curve-MYVJeGQI.js";import"./step-C33N2LGT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DqLOTWDO.js";import"./Dot-D7no8cFh.js";import"./getRadiusAndStrokeWidthFromDot-BcIv-0gg.js";import"./useElementOffset-Bjp7QiHs.js";import"./uniqBy-4GbLHGYo.js";import"./iteratee-BHWq50Tg.js";import"./Cross-DdXKijQJ.js";import"./Sector-CFinmXte.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
