import{R as t}from"./iframe-Dv2mkDD6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CqyybjBv.js";import{R as l}from"./zIndexSlice-2fg2g2Dp.js";import{C as x}from"./ComposedChart-IQb96AId.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C4QQbTtV.js";import{L as a}from"./Line-DZ9JoKgT.js";import{X as c}from"./XAxis-CXyJf7fo.js";import{T as g}from"./Tooltip-1lg2SCwQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-EiM4K4Yy.js";import"./CartesianAxis-DFbvktXE.js";import"./Layer-BkXvHIXh.js";import"./resolveDefaultProps-pfm2KtVH.js";import"./Text-CEJxHZH-.js";import"./DOMUtils-CJIsN_cb.js";import"./isWellBehavedNumber-DWptWa3e.js";import"./Label-Cr9zsE7b.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-pZIzemBm.js";import"./index-9bEp3bq8.js";import"./index-Ds7CCKWE.js";import"./types-CH3zmrHK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-COLD4oXN.js";import"./immer-CP6W9K53.js";import"./RechartsWrapper-CkEfkKBB.js";import"./index-CbNA4IYq.js";import"./index-CX6QVWJd.js";import"./axisSelectors-BxD9EJGH.js";import"./d3-scale-DIID899h.js";import"./CartesianChart-NBwPQSms.js";import"./chartDataContext-BOvLrxST.js";import"./CategoricalChart-CYR6VSGv.js";import"./tooltipContext-gIRAXb4Q.js";import"./AnimatedItems-D9UxuFUl.js";import"./useAnimationId-eauTaXpl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DendxdxL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DZxftlok.js";import"./RegisterGraphicalItemId-CjWM_Bfz.js";import"./ErrorBarContext-D_yXcxuv.js";import"./GraphicalItemClipPath-BtBW0RWE.js";import"./SetGraphicalItem-LAI4OSkO.js";import"./getZIndexFromUnknown-DY9XqzRJ.js";import"./graphicalItemSelectors-Zjg8Zcv4.js";import"./Curve-CvaYf9T-.js";import"./step-DPezKmex.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BlUx1Bmp.js";import"./Dot-DlHqO2in.js";import"./getRadiusAndStrokeWidthFromDot-BIlzguSV.js";import"./useElementOffset-1T9XAteM.js";import"./uniqBy-CaeqsPkF.js";import"./iteratee-BHtdL65p.js";import"./Cross-vckZASjN.js";import"./Sector-Dg5Y_c7z.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
