import{R as t}from"./iframe-DgJplLvS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dq42uhEw.js";import{R as l}from"./zIndexSlice-BEw7ZoBF.js";import{C as x}from"./ComposedChart-C92-LZLE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-8EUbBbWd.js";import{L as a}from"./Line-DVl-UA0H.js";import{X as c}from"./XAxis-Cv0cLySm.js";import{T as g}from"./Tooltip-Diuoded2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-iv3hpdCC.js";import"./Layer-CDKK6jHZ.js";import"./resolveDefaultProps-CgspoxK6.js";import"./Text-DSQZtkf1.js";import"./DOMUtils-C8GJnqc6.js";import"./isWellBehavedNumber-CYMKDc-o.js";import"./Label-DUk5cie5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DezlpkmC.js";import"./index-CuR81imj.js";import"./index-DVtuWZEP.js";import"./types-DgMxxOTT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-RcICWtpY.js";import"./throttle-BFtjLKgc.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DkMI-tV9.js";import"./index-Bwl4xJcj.js";import"./index-DBV_c5tC.js";import"./axisSelectors-YqbMVrI6.js";import"./d3-scale-T7rND5KE.js";import"./CartesianChart-CDSt_igg.js";import"./chartDataContext-B8YdYa_T.js";import"./CategoricalChart-B_F4Qeg4.js";import"./tooltipContext-CSxEZFbz.js";import"./AnimatedItems-hO6Ptiqq.js";import"./useAnimationId-SGeRDQQf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BkNYTIw0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cjw-C0nA.js";import"./RegisterGraphicalItemId-B36x_Amu.js";import"./ErrorBarContext-PVL9kjDM.js";import"./GraphicalItemClipPath-Dn9TF0yr.js";import"./SetGraphicalItem-9qFMsJKM.js";import"./getZIndexFromUnknown-B01YUBHi.js";import"./graphicalItemSelectors-ByvlN9As.js";import"./Curve-BjTIUQH-.js";import"./step-CkXO2b_C.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dudi51yy.js";import"./Dot-CJqaNK4q.js";import"./getRadiusAndStrokeWidthFromDot-DkNcCvt4.js";import"./useElementOffset-BA__8TOj.js";import"./uniqBy-BsO6J-fr.js";import"./iteratee-m2OFbEqY.js";import"./Cross-dkc1C4KG.js";import"./Sector-DOS1I4Dx.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
