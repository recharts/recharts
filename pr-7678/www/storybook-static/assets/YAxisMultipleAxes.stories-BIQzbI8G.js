import{R as t}from"./iframe-oJEYIYVD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D5BvcVb4.js";import{R as l}from"./zIndexSlice-8Xd9ui4v.js";import{C as x}from"./ComposedChart-BIeE5g7X.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ckHFcUCC.js";import{L as a}from"./Line-BRdUYfK5.js";import{X as c}from"./XAxis-BGcEKdMP.js";import{T as g}from"./Tooltip-Bmdbz3Gw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BAH99IO9.js";import"./Text-CtBEPsPC.js";import"./resolveDefaultProps-DHMesOBd.js";import"./DOMUtils-Cf8xbxEH.js";import"./isWellBehavedNumber-BUWW9YlW.js";import"./useId-CMdQMiLi.js";import"./useBackwardsCompatibleTheme-DXWZN45A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cvj5uv_m.js";import"./index-1WCRhzzt.js";import"./index-9lHgIK0X.js";import"./RechartsWrapper-ENwYgfgF.js";import"./index-DPJLoqId.js";import"./index-CoIOggcU.js";import"./throttle-DQw_TB4k.js";import"./axisSelectors-CsLlIDAD.js";import"./d3-scale-DB3cJCiA.js";import"./renderedTicksSlice-DU_GMzWX.js";import"./CartesianAxis-C0z7V-tm.js";import"./Layer-BCc9Twjs.js";import"./types-qn8KP6HN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C-gtXtO6.js";import"./chartDataContext-BNgKqfWM.js";import"./CategoricalChart-DFXPtrpT.js";import"./AnimatedItems-bvrA4fOd.js";import"./useAnimationId-Cuwuz8F4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6_rBacYy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-YLbAgrLf.js";import"./tooltipContext-BxtUFVO6.js";import"./RegisterGraphicalItemId-BktobOXw.js";import"./ErrorBarContext-BeupN1xy.js";import"./GraphicalItemClipPath-DsG6iHd1.js";import"./SetGraphicalItem-C8Wpyevh.js";import"./getZIndexFromUnknown-CPZD-VQ6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C8codeQo.js";import"./Curve-Cdxa9GvD.js";import"./step-DIL1YdEp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BJ3vETVR.js";import"./Dot-9wHacS1O.js";import"./getRadiusAndStrokeWidthFromDot-CCXj_Isv.js";import"./useElementOffset-0qwWTu7f.js";import"./uniqBy-2i4DD0Ye.js";import"./iteratee-D6e9wFia.js";import"./Cross--l7B6tS8.js";import"./Sector-diTN-Rh0.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
