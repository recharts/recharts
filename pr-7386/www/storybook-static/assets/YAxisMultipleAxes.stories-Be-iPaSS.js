import{c as t}from"./iframe-DmBQ8HMz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D8ss-GGA.js";import{g as l}from"./zIndexSlice-DIRHIjeL.js";import{C as x}from"./ComposedChart-DNElitZJ.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-kkOUqeOv.js";import{L as a}from"./Line-DN2wolye.js";import{X as A}from"./XAxis-BaDVYnrk.js";import{T as g}from"./Tooltip-ggIM9FnY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Ckx5uNL8.js";import"./CartesianAxis-B9da2UAY.js";import"./Layer-BhYZ1XdM.js";import"./resolveDefaultProps-DuJ2-4bL.js";import"./Text-DDANB2NF.js";import"./DOMUtils-o09_GivZ.js";import"./isWellBehavedNumber-BHVm_SNT.js";import"./Label-C1M61kae.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-eAbRrt0r.js";import"./index-kdRFnVq9.js";import"./index-RSqbnpUZ.js";import"./types-DUdiMbO-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DVSCP4nP.js";import"./immer-CvETSy6i.js";import"./RechartsWrapper-DWg7_V2c.js";import"./index-o0mRVwTr.js";import"./index-Drn3R5Q6.js";import"./axisSelectors-COTb3exH.js";import"./d3-scale-CE7Es6uL.js";import"./CartesianChart-uAfb6KQX.js";import"./chartDataContext-CpJyWUlD.js";import"./CategoricalChart-DUJKtdcW.js";import"./tooltipContext-Cg0_U2Ap.js";import"./ReactUtils-DKCxnkHT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-i0rACkhx.js";import"./useAnimationId-BZ5U8z_o.js";import"./ActiveShapeUtils-DVhmDt4u.js";import"./RegisterGraphicalItemId-Dup5UL4N.js";import"./ErrorBarContext-DC5ZfMR_.js";import"./GraphicalItemClipPath-pcxJ2TmH.js";import"./SetGraphicalItem-CsbBVlmH.js";import"./getZIndexFromUnknown-3SUzMX_I.js";import"./graphicalItemSelectors-CAXxuBta.js";import"./Curve-Ddn0Q7My.js";import"./step-CN9Am_zJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BCqOvBdY.js";import"./Dot-nij0AL23.js";import"./getRadiusAndStrokeWidthFromDot-CZpBgath.js";import"./useElementOffset-DsYLvXSH.js";import"./uniqBy-KElqJvHA.js";import"./iteratee-D3O-hQgd.js";import"./Cross-C3zVbeHE.js";import"./Sector-DfvY5sWv.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
