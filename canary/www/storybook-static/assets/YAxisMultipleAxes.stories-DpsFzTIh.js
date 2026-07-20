import{R as t}from"./iframe-txLfFnZC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bqp7D6OE.js";import{R as l}from"./zIndexSlice-BxlfArAG.js";import{C as x}from"./ComposedChart-C3txqyeK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DIBt6LBj.js";import{L as a}from"./Line-D0hoDC_i.js";import{X as c}from"./XAxis-CUKDl1yE.js";import{T as g}from"./Tooltip-DkUgIqYd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bpg83Llu.js";import"./Layer-DgCStFRG.js";import"./resolveDefaultProps-BBYfN4li.js";import"./Text-CFMnT5X2.js";import"./DOMUtils-BfTHFrOm.js";import"./isWellBehavedNumber-DsLwC3LI.js";import"./Label-Bg0xf_F2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CgOQ9duv.js";import"./index-faRlTy-y.js";import"./index-BnBpNwbh.js";import"./types-DBwOBb8v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C2wSEtKv.js";import"./throttle-q2TDx7Oc.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BDYeTMp6.js";import"./index-CYC3OVnH.js";import"./index-CTiUFbNZ.js";import"./axisSelectors-ClpNZRSK.js";import"./d3-scale-C2Ev96_0.js";import"./CartesianChart-CZzNDwaM.js";import"./chartDataContext-B9BMm3ef.js";import"./CategoricalChart-D2mtca-7.js";import"./tooltipContext-CKBdin0m.js";import"./AnimatedItems-DXTzwQHr.js";import"./useAnimationId-BBZuCs7J.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DXH6HZeC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CgPV4Ht_.js";import"./RegisterGraphicalItemId-CKNrcWiv.js";import"./ErrorBarContext-g-_09_Lv.js";import"./GraphicalItemClipPath-CeZp1Nou.js";import"./SetGraphicalItem-ZtkOOX-3.js";import"./getZIndexFromUnknown-Cu0mtb3l.js";import"./graphicalItemSelectors-p5AVEwSd.js";import"./Curve-C5z8NQ6L.js";import"./step-Ca4h6n57.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CFI3c4jj.js";import"./Dot-BIm_l5LV.js";import"./getRadiusAndStrokeWidthFromDot-B1a7F3Ip.js";import"./useElementOffset--duMbzsX.js";import"./uniqBy-mrq-VNPF.js";import"./iteratee-BctTBoA4.js";import"./Cross-DcMHT31L.js";import"./Sector-B_dMD-mA.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
