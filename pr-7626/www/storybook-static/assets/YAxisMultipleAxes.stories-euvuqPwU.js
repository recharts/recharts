import{R as t}from"./iframe-mg7UZdto.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BMDO5XEp.js";import{R as l}from"./zIndexSlice-DEfN8C0Z.js";import{C as x}from"./ComposedChart-CIbzCW-5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DzM5EmX9.js";import{L as a}from"./Line-CKKxuewC.js";import{X as c}from"./XAxis-BsNzvHKv.js";import{T as g}from"./Tooltip-B8ZKq-Dz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dkvvn7Fi.js";import"./Text-B1zEX4dn.js";import"./resolveDefaultProps-BbtnPTv-.js";import"./DOMUtils-L0wsUfkf.js";import"./isWellBehavedNumber-D_gpPOh3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CwALprKR.js";import"./index-DZOBKqcM.js";import"./index-bFsd1KxH.js";import"./RechartsWrapper-BkHp-MEf.js";import"./index-BUwgWfYf.js";import"./index-DeDE_LvF.js";import"./throttle-HD1NX84B.js";import"./axisSelectors-BM8BDlXD.js";import"./d3-scale-BWztF9lr.js";import"./renderedTicksSlice-sYtIEKKa.js";import"./CartesianAxis-DSGrP4Zf.js";import"./Layer-C85ssoby.js";import"./types-afGVOb_T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CO1IbQpv.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B1jEcb3f.js";import"./chartDataContext-Dda0Eag5.js";import"./CategoricalChart-B1n3f5Qd.js";import"./tooltipContext-C7x9qkWu.js";import"./AnimatedItems-B1JY3m8f.js";import"./useAnimationId-B9PPVOgc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Di0wPj7o.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-vQCoYSuM.js";import"./RegisterGraphicalItemId-k1fDZWtY.js";import"./ErrorBarContext-BlA0hFY9.js";import"./graphicalItemIdentity-C58faD0D.js";import"./SetGraphicalItem-Cs3-aGdX.js";import"./getZIndexFromUnknown-CKCKu8Wz.js";import"./graphicalItemSelectors-5KxCicCV.js";import"./Curve-k9Dj6G6o.js";import"./step-CmgtGEqA.js";import"./path-DyVhHtw_.js";import"./ActivePoints-q5U2dg7Z.js";import"./Dot-Bxa-PMP9.js";import"./getRadiusAndStrokeWidthFromDot-DhEmmwnz.js";import"./useElementOffset-CEEz18uE.js";import"./uniqBy-ruWdsv0m.js";import"./iteratee-BYovAAOw.js";import"./Cross-CdCS8kMS.js";import"./Sector-DlZB2hlJ.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
