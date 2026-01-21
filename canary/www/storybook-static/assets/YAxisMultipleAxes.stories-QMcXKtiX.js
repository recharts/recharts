import{e as t}from"./iframe-Dt2-Rn2T.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-CkTVj5OB.js";import{R as l}from"./arrayEqualityCheck-e3rdG8sZ.js";import{C as x}from"./ComposedChart-CpKIk9zm.js";import{B as o}from"./Bar-DKKXbD6J.js";import{L as a}from"./Line-BoGV8EYk.js";import{X as c}from"./XAxis-CRrkfAWq.js";import{T as A}from"./Tooltip-zi9iWAjn.js";import{R as g}from"./RechartsHookInspector-5aSdxu_t.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BoKEDzkZ.js";import"./CartesianAxis-CuL6QCDl.js";import"./Layer-Cy-kS3Tn.js";import"./Text-Bi0muiqL.js";import"./DOMUtils-ngjC_q0v.js";import"./Label-C32CYHoq.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-RqzvM65R.js";import"./zIndexSlice-C1nzEFYS.js";import"./types-BU6HIYaW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DJKBhfj1.js";import"./axisSelectors-B_oLlWSB.js";import"./RechartsWrapper-CBGhND_r.js";import"./CartesianChart-B7uV6D3o.js";import"./chartDataContext-DW1Hpk6b.js";import"./CategoricalChart-Dpdb76Jr.js";import"./tooltipContext-BR1HLUbB.js";import"./ReactUtils-OtSSiA15.js";import"./ActiveShapeUtils-d0cRIwlh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbTbEpru.js";import"./useAnimationId-C5m05tY7.js";import"./Trapezoid-BtcZZN-I.js";import"./Sector-D7OsKu7Y.js";import"./Symbols-Cq9VSHhf.js";import"./Curve-Ff2ksW4t.js";import"./RegisterGraphicalItemId-BHPtgntX.js";import"./ErrorBarContext-Ds0jOqwg.js";import"./GraphicalItemClipPath-DzB0Slfu.js";import"./SetGraphicalItem-C72JWaDt.js";import"./getZIndexFromUnknown-CodYqlwr.js";import"./graphicalItemSelectors-CxiBt8fS.js";import"./ActivePoints-DYpwLrvq.js";import"./Dot-yws4r2HM.js";import"./getRadiusAndStrokeWidthFromDot-9ys3gSvC.js";import"./useElementOffset-CUFeQ2ye.js";import"./iteratee-HLQGaxaB.js";import"./Cross-jy0XmrOG.js";import"./index-DBIfqZnx.js";import"./ChartSizeDimensions-CGKu1G21.js";import"./OffsetShower-Cg1AihHI.js";import"./PlotAreaShower-Byk-bE4C.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
