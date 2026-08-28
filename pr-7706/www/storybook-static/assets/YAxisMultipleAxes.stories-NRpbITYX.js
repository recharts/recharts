import{R as t}from"./iframe-CIwxHuVP.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-COiio6CI.js";import{R as l}from"./zIndexSlice-4cOqtSJ1.js";import{C as x}from"./ComposedChart-D9qEBqM1.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DnCAG48h.js";import{L as a}from"./Line-JFyqB5U2.js";import{X as c}from"./XAxis-CIHUnpyu.js";import{T as g}from"./Tooltip-C8H5wACs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-P76xZGuB.js";import"./Text-DdeI7QFK.js";import"./resolveDefaultProps-BqjvsCVB.js";import"./DOMUtils-DJmg_ALb.js";import"./isWellBehavedNumber-DnH2FQ7z.js";import"./useId-CvnBUwAn.js";import"./useBackwardsCompatibleTheme-CaEtd9Gi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DSlR-fbE.js";import"./index-DYcgeWKW.js";import"./index-BBY9vn-H.js";import"./RechartsWrapper-saup7v4_.js";import"./axisSelectors-YcB3o8_5.js";import"./throttle-DyeZ31Gg.js";import"./d3-scale-BsCK15DF.js";import"./index-Dret-drz.js";import"./index-KtvOjFJW.js";import"./renderedTicksSlice-BymeN3Gd.js";import"./index-CgMi-XQz.js";import"./CartesianAxis-D27Sw88P.js";import"./Layer-QH0nRmzc.js";import"./types-CaxJYW3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BuIzZkiF.js";import"./chartDataContext-BnEwWcTU.js";import"./CategoricalChart-BsI6BCbz.js";import"./AnimatedItems-CJSCuTfT.js";import"./useAnimationId-CRxHEUg9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dicx6LJz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_X8XuiV.js";import"./tooltipContext-MJGQSXdg.js";import"./RegisterGraphicalItemId-Bx9h1qwh.js";import"./ErrorBarContext-BBpfpkXa.js";import"./GraphicalItemClipPath-DfR7F3pr.js";import"./SetGraphicalItem-DCJicVim.js";import"./getZIndexFromUnknown-Bjm0lEjM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BMtT3rRV.js";import"./Curve-ByjfkPmA.js";import"./step-CKl1-sZu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DbUUlzxv.js";import"./Dot-USLgQRMp.js";import"./getRadiusAndStrokeWidthFromDot-CxoI2rZS.js";import"./useElementOffset-C8fj9EDe.js";import"./uniqBy-Ck5EUTAW.js";import"./iteratee-Do4CuqXa.js";import"./Cross-BaBq-Hrh.js";import"./Sector-DMRej8x1.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
