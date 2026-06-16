import{R as t}from"./iframe-C_T02oQn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CAA9Sn25.js";import{R as l}from"./zIndexSlice-PaMIo_4H.js";import{C as x}from"./ComposedChart-D2veWJ82.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CxOYR-VN.js";import{L as a}from"./Line-Bkm0IHhG.js";import{X as c}from"./XAxis-9hDWnVEM.js";import{T as g}from"./Tooltip-CzaIn816.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C7erGA50.js";import"./CartesianAxis-Du2JQot0.js";import"./Layer-DjmjZ8nK.js";import"./resolveDefaultProps-m_js62KJ.js";import"./Text-BPMY0rSA.js";import"./DOMUtils-D0fMC5uZ.js";import"./isWellBehavedNumber-BCiXswn1.js";import"./Label-PISAROHv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BEphblF2.js";import"./index-Dlc1g4gM.js";import"./index-Ca6EOx6F.js";import"./types-BgdJMLXg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CaJKKs-e.js";import"./immer-B6lblpQa.js";import"./RechartsWrapper-B6sFF1OD.js";import"./index-C8_JgXbr.js";import"./index-D8uzW4ZU.js";import"./axisSelectors-BhG2tLgr.js";import"./d3-scale-BkdgfgBA.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BDn-adSN.js";import"./chartDataContext-BpZSWeLp.js";import"./CategoricalChart-DJkiCneY.js";import"./tooltipContext-Wy-EiK55.js";import"./AnimatedItems-BUXgV9u-.js";import"./useAnimationId-BP6MXfIJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_fFb_u8.js";import"./ActiveShapeUtils-CWkOqTvX.js";import"./RegisterGraphicalItemId-CLd-qaBQ.js";import"./ErrorBarContext-BlU25AOm.js";import"./GraphicalItemClipPath-hcKIGZeq.js";import"./SetGraphicalItem-CYOjbzSp.js";import"./getZIndexFromUnknown-W5DT5hfL.js";import"./graphicalItemSelectors-Dg_JoB9V.js";import"./Curve-YTaF5YAP.js";import"./step-DxTezoeO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-wYW31SoX.js";import"./Dot-BqWNwI4e.js";import"./getRadiusAndStrokeWidthFromDot-BgRiSanx.js";import"./useElementOffset-DhbYobY7.js";import"./uniqBy-CWJ7W0V1.js";import"./iteratee-CidJxIEL.js";import"./Cross-Cxjm4Cmv.js";import"./Sector-_x2Ka2K-.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
