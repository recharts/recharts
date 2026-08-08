import{R as t}from"./iframe-rYRmlY_w.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BWeWjLFg.js";import{R as l}from"./zIndexSlice-CW9g3Df4.js";import{C as x}from"./ComposedChart-CJWWrFGv.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DE0rgum-.js";import{L as a}from"./Line-OyqWaweM.js";import{X as c}from"./XAxis-B2S1kxsc.js";import{T as g}from"./Tooltip-BJy8LCx9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C_0fnefy.js";import"./Text-yyeh64ow.js";import"./resolveDefaultProps-BpsYi27l.js";import"./DOMUtils-vuT3ag2A.js";import"./isWellBehavedNumber-I3Ct3Qx4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DjuCBj9U.js";import"./index-C9MyWVnc.js";import"./index-XYmaX6Gc.js";import"./RechartsWrapper-Df0Nzpvc.js";import"./index-LHDP7ZRA.js";import"./index-mkET9CIq.js";import"./throttle-DMLB0n1a.js";import"./axisSelectors-CawrvlcN.js";import"./d3-scale-C-FCD3Na.js";import"./renderedTicksSlice-BaDCcj0z.js";import"./CartesianAxis-BPXoMhkW.js";import"./Layer-Dpa7ZKP5.js";import"./types-B2Hj88Lf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C6kBHVPv.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Di-wUoL0.js";import"./chartDataContext-CUzIUSSV.js";import"./CategoricalChart-BXI0eqUO.js";import"./tooltipContext-B8sauHiC.js";import"./AnimatedItems-CIev447X.js";import"./useAnimationId-B08Ps5mJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B78Clo56.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CwtXXETb.js";import"./RegisterGraphicalItemId-CgoQC8_y.js";import"./ErrorBarContext-D9hFLWDz.js";import"./graphicalItemIdentity-CcyqkVrD.js";import"./SetGraphicalItem-BR2pwaBe.js";import"./getZIndexFromUnknown-Cw_gD9AS.js";import"./graphicalItemSelectors-CX8YC0IP.js";import"./Curve-Dde8oLlo.js";import"./step-BmztjEzR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BM73sJ66.js";import"./Dot-BJyh6EJc.js";import"./getRadiusAndStrokeWidthFromDot-rFO_VTeN.js";import"./useElementOffset-BlBkdftn.js";import"./uniqBy-1Q7zCRmp.js";import"./iteratee-C2W6XbU2.js";import"./Cross-Ce6okpil.js";import"./Sector-CY7poIyV.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
