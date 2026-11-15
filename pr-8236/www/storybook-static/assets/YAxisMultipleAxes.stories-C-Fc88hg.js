import{R as t}from"./iframe-BhLunS0i.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-D6-PxaVK.js";import{R as l}from"./zIndexSlice-DSPJCLFE.js";import{C as x}from"./ComposedChart-prDwTclO.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D3eSmVqn.js";import{L as a}from"./Line-DZl1t4Hn.js";import{X as c}from"./XAxis-gG48cTvb.js";import{T as g}from"./Tooltip-BdCJK4dj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BKkx1Yqi.js";import"./Text-DaAfyhaD.js";import"./resolveDefaultProps-DXAJRd9k.js";import"./ZIndexLayer-DT0AmS3A.js";import"./index-H7oJ2m7W.js";import"./index-CcZqU02h.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BbkwWyBS.js";import"./throttle-CRN4ZNKA.js";import"./axisSelectors-D1ydZeah.js";import"./d3-scale-DitufHHw.js";import"./CartesianAxis-D8zKHO5C.js";import"./Layer-BM8-5uQX.js";import"./types-CT83QobA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-R-_VMDVC.js";import"./index-D0rCwL5o.js";import"./index-DIg_N1nK.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-wQ1gT1I0.js";import"./index-CFjbQa5l.js";import"./fillDefinitions-CiiNJPEd.js";import"./CartesianChart-Bh_JRPa2.js";import"./chartDataContext-BNqwthL0.js";import"./CategoricalChart-D-9XLz-N.js";import"./dataEntryStyles-V8RFTVJZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ioyw2VQ4.js";import"./useAnimationId-Xa81ZCl9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DTLaa-AG.js";import"./tooltipContext-BSuL8M8T.js";import"./ErrorBarContext-B9XBEKPc.js";import"./activeStyles-CJzsRDKh.js";import"./SetGraphicalItem-DMPKHwhz.js";import"./getZIndexFromUnknown-Yq7_IgfD.js";import"./useEffectiveDataKey-0h-gJoNJ.js";import"./omit-CUktut_P.js";import"./isArguments-yB-y1yaH.js";import"./Curve-LlXUYE-L.js";import"./step-C270rjWW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B_P37ke-.js";import"./Dot-5madfp2A.js";import"./Symbols-DZ9QCbQ8.js";import"./symbol-C4ewZ54u.js";import"./getRadiusAndStrokeWidthFromDot-DJtKm8XN.js";import"./useElementOffset-CqLb8czN.js";import"./uniqBy-BLbM-jB1.js";import"./iteratee-BGzKQzLt.js";import"./Cross-BYYJ1ucY.js";import"./Sector-CwkUIIQR.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
