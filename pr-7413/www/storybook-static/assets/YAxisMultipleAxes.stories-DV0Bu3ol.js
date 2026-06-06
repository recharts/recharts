import{R as t}from"./iframe-C2BX5KlG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DyEK7c-9.js";import{R as l}from"./zIndexSlice-CxPEcPAu.js";import{C as x}from"./ComposedChart-CzoJ7T6H.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-FzWaizTu.js";import{L as a}from"./Line-DLZXl40V.js";import{X as c}from"./XAxis-DVvf2cjO.js";import{T as g}from"./Tooltip-BNcp-BI8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CAfMQs0q.js";import"./CartesianAxis-1gCJxPwk.js";import"./Layer-Y7EAuX4r.js";import"./resolveDefaultProps-BYCxJvcu.js";import"./Text-D33SlXvN.js";import"./DOMUtils-DjP-hpRu.js";import"./isWellBehavedNumber-DmYLFUk5.js";import"./Label-BtHuGICT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DXknjapM.js";import"./index-BGPmBimQ.js";import"./index-COSvD7ew.js";import"./types-Bzm0K4Xv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-u_9WNmNI.js";import"./immer-CvWW5aeq.js";import"./RechartsWrapper-D59koTZo.js";import"./index-mM7HvUIP.js";import"./index-B4ncEIHG.js";import"./axisSelectors-CMoKJGYW.js";import"./d3-scale-CWyzRMoK.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BUqQYDbS.js";import"./chartDataContext-BBtoeQBI.js";import"./CategoricalChart-wPXQ1QrH.js";import"./tooltipContext-BK1l4duH.js";import"./AnimatedItems-a4bz34sF.js";import"./useAnimationId-By3GmLUa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DRmt8yX0.js";import"./ActiveShapeUtils-8DISroY0.js";import"./RegisterGraphicalItemId-D-0LsKMM.js";import"./ErrorBarContext-Dxkwh2s-.js";import"./GraphicalItemClipPath-BeTilTZu.js";import"./SetGraphicalItem-BLppYw7V.js";import"./getZIndexFromUnknown-DOoTio9Z.js";import"./graphicalItemSelectors-ClfPkK1e.js";import"./Curve-skm-derQ.js";import"./step-CaZe8v-k.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BR22gwdA.js";import"./Dot-MNln9N_X.js";import"./getRadiusAndStrokeWidthFromDot-BpkcLqmS.js";import"./useElementOffset-DgvALgLL.js";import"./uniqBy-Dndb0Oy8.js";import"./iteratee-KOU-VhL7.js";import"./Cross-Cr_uS2gb.js";import"./Sector-BGIVy27E.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
