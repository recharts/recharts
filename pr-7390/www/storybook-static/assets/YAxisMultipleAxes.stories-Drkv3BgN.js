import{c as t}from"./iframe-UCAhYs-z.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-COo7eY63.js";import{g as l}from"./zIndexSlice-D1yLUW4N.js";import{C as x}from"./ComposedChart-Z0W1ZhiK.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-9Zu4jCDx.js";import{L as a}from"./Line-jctQMIuW.js";import{X as A}from"./XAxis-DQ_rFapE.js";import{T as g}from"./Tooltip-B_bJQRGz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-_XX617w0.js";import"./CartesianAxis-UsQkFlnQ.js";import"./Layer-BbZFEpf4.js";import"./resolveDefaultProps-x5qwSX1Y.js";import"./Text-Rw6qQ1RF.js";import"./DOMUtils-BWCSYHt1.js";import"./isWellBehavedNumber-km_cSMyX.js";import"./Label-CtGR-die.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CEmXwARt.js";import"./index-DNUUkfMj.js";import"./index-DUfS7S-b.js";import"./types-tyluCCo2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-c5635lKm.js";import"./immer-C7lWlBZP.js";import"./RechartsWrapper-DH9U6NxN.js";import"./index-CWyZ4H7B.js";import"./index-CgqmNVZ9.js";import"./axisSelectors-DDRfemS2.js";import"./d3-scale-4iD7H2_D.js";import"./CartesianChart-W_64lWDO.js";import"./chartDataContext-tDfcFOTc.js";import"./CategoricalChart-D1LSz5Gs.js";import"./tooltipContext-BjQ73eS5.js";import"./ReactUtils-CzulCaS-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-_bYQmpgX.js";import"./useAnimationId-BjOATGeC.js";import"./ActiveShapeUtils-BWM9wxaW.js";import"./RegisterGraphicalItemId-ByRoWgeN.js";import"./ErrorBarContext-Cvfv4OR0.js";import"./GraphicalItemClipPath-C-wdvxqO.js";import"./SetGraphicalItem-X5GoC_bE.js";import"./getZIndexFromUnknown-mCZj_BBm.js";import"./graphicalItemSelectors-BSW7Id0m.js";import"./Curve-DOjbLHoQ.js";import"./step-BCk2IvEt.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DwgVtAw6.js";import"./Dot-Cu_IjLEt.js";import"./getRadiusAndStrokeWidthFromDot-BL_cRC7m.js";import"./useElementOffset-DDgeNPdG.js";import"./uniqBy-BLPksq8r.js";import"./iteratee-Djf5ohSS.js";import"./Cross-CeE_DgSf.js";import"./Sector-CzBj4H8e.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
