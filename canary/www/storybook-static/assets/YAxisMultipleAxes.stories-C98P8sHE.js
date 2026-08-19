import{R as t}from"./iframe-TE0a3h8U.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-nM39HCeg.js";import{R as l}from"./zIndexSlice-CuzvPj3e.js";import{C as x}from"./ComposedChart-CK1drtAL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dq6Q8__O.js";import{L as a}from"./Line-BxXqtFAj.js";import{X as c}from"./XAxis-DYSrX7Pe.js";import{T as g}from"./Tooltip-B4ev46Vk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DW2voJ8G.js";import"./Text-DL22Whxw.js";import"./resolveDefaultProps-DxKF5pbQ.js";import"./DOMUtils-CzEfLf16.js";import"./isWellBehavedNumber-Cwb0Yuac.js";import"./useId-CnhnPuIR.js";import"./useBackwardsCompatibleTheme-Kb0l05fi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DV8vU7iD.js";import"./index-CbO58SlV.js";import"./index-Bes_wTqv.js";import"./RechartsWrapper-Zf4efnQ7.js";import"./index-CH7AYfaw.js";import"./index-mICHaOdM.js";import"./throttle-B9xIgtOp.js";import"./axisSelectors-D4Hdk4ax.js";import"./d3-scale-ClwuSri4.js";import"./renderedTicksSlice-CV9ehOCs.js";import"./CartesianAxis-zD9IwJ4x.js";import"./Layer-CEnr9JeS.js";import"./types-8QdsKxPr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D6VrfDcf.js";import"./chartDataContext-CdtLleKV.js";import"./CategoricalChart-D_woPTvb.js";import"./AnimatedItems-CFCWs_6E.js";import"./useAnimationId-BD80cuEQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8S9t7Qs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlXszYqE.js";import"./tooltipContext-GQXy2B0j.js";import"./RegisterGraphicalItemId-BfW92mN9.js";import"./ErrorBarContext-C63SGP0L.js";import"./GraphicalItemClipPath-DIHeVoC3.js";import"./SetGraphicalItem-BZwhXqLy.js";import"./getZIndexFromUnknown-DWalIvOm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BV25kRqp.js";import"./Curve-0Fl3QjsV.js";import"./step-DBFL-Bln.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Wah4GhQ3.js";import"./Dot-CvKEUnwP.js";import"./getRadiusAndStrokeWidthFromDot-o3R21rDY.js";import"./useElementOffset-2eLJ_fKs.js";import"./uniqBy-DzAw4gbB.js";import"./iteratee-D3tN9cZP.js";import"./Cross-zJbcibpt.js";import"./Sector-Fjs99btG.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
