import{c as t}from"./iframe-Cvf4U4wn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CMM495nD.js";import{g as l}from"./zIndexSlice-CO7DftJr.js";import{C as x}from"./ComposedChart-DDdTWodp.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-CY-a-BCQ.js";import{L as a}from"./Line-DYvazgCg.js";import{X as A}from"./XAxis-l3Ov2KAu.js";import{T as g}from"./Tooltip-QaWAXfYX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DcGEMmQ3.js";import"./CartesianAxis-BKWdoZud.js";import"./Layer-CDCy6J-l.js";import"./resolveDefaultProps-_tlFTpxx.js";import"./Text-Kfko65iu.js";import"./DOMUtils-0PFm0Zn3.js";import"./isWellBehavedNumber-D1x3hQfA.js";import"./Label-DCVsgxMs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DmQbCY-Q.js";import"./index-BqdhXxVe.js";import"./index-Ie5aROBq.js";import"./types-CuBUAF5G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6GQfAg5.js";import"./immer-CBt7R_8A.js";import"./RechartsWrapper-hVt29Fw0.js";import"./index-_osGLyvR.js";import"./index-84gp7b_-.js";import"./axisSelectors-DVSbKCnr.js";import"./d3-scale-DPGKMlVi.js";import"./CartesianChart-DDk2GzyN.js";import"./chartDataContext-BwbL_Y5V.js";import"./CategoricalChart-Bqu7zn37.js";import"./tooltipContext-0Iqqd4zj.js";import"./ReactUtils-CtvGvrJ3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DlZf8ANQ.js";import"./useAnimationId-DtyIsMoa.js";import"./ActiveShapeUtils-BFe2i1Jy.js";import"./RegisterGraphicalItemId-1iDEiZF0.js";import"./ErrorBarContext-d8hdoxRP.js";import"./GraphicalItemClipPath-D3CDUk-1.js";import"./SetGraphicalItem-wq1eCtaf.js";import"./getZIndexFromUnknown-j9SKn860.js";import"./graphicalItemSelectors-CjLduXjZ.js";import"./Curve-DdUHzuyS.js";import"./step-_BMXLB8G.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CP_bslYY.js";import"./Dot-DEWSwyeJ.js";import"./getRadiusAndStrokeWidthFromDot-Cm80QE2r.js";import"./useElementOffset-WW4KUmBb.js";import"./uniqBy-BQjndAzO.js";import"./iteratee-CTJSODyf.js";import"./Cross-CLjsubSm.js";import"./Sector-Cc3eSa_T.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
