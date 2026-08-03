import{R as t}from"./iframe-w1sUw1VE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DDPi_wRf.js";import{R as l}from"./zIndexSlice-BFtIIbIH.js";import{C as x}from"./ComposedChart-BjXbyHB1.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B-mQSUbS.js";import{L as a}from"./Line-D9Or3fJp.js";import{X as c}from"./XAxis-Cjs911bp.js";import{T as g}from"./Tooltip-CdVD6gEW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DclIafX4.js";import"./Text-BMcE5w5g.js";import"./resolveDefaultProps-DsVHMq00.js";import"./DOMUtils-CT4eanyO.js";import"./isWellBehavedNumber-B6HqUKYK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BmjcQumE.js";import"./index-CKtl8pQB.js";import"./index-JAlJc66Y.js";import"./RechartsWrapper-kdFU-RZ0.js";import"./index-B50wbS8k.js";import"./index-DREvHpCt.js";import"./throttle-9uSjnkRJ.js";import"./renderedTicksSlice-BYSsRx-Z.js";import"./axisSelectors-Fjy06-Ct.js";import"./d3-scale-BNSttRgc.js";import"./CartesianAxis-CxEX_iq4.js";import"./Layer-B0FPP_Ev.js";import"./types-BKQwKiAc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-ws5do87s.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cpc3KnxA.js";import"./chartDataContext-Qn0Ey9bz.js";import"./CategoricalChart-DPuU_nkZ.js";import"./tooltipContext-BqWyhGH_.js";import"./AnimatedItems-BO3fZMy0.js";import"./useAnimationId-oodeuVFJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-unJoww32.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D_EfEkHZ.js";import"./RegisterGraphicalItemId-BXlJHdat.js";import"./ErrorBarContext-DxbwWYVa.js";import"./GraphicalItemClipPath-DIJRkSkT.js";import"./SetGraphicalItem-DINcEBZn.js";import"./getZIndexFromUnknown-DVbVS_c_.js";import"./graphicalItemSelectors-BVXGcCTk.js";import"./Curve-C6IEG5wt.js";import"./step-DwoRKPdQ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DgvIxblY.js";import"./Dot-0Sa9Tyfc.js";import"./graphicalItemIdentity-B_W-R4bm.js";import"./useElementOffset-Bq1Ge05V.js";import"./uniqBy-Dg36dhD9.js";import"./iteratee-DSG09e17.js";import"./Cross-DqwDDtKx.js";import"./Sector-C0Ix5px1.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
