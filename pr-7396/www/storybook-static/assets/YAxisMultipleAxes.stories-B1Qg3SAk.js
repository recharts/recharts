import{R as t}from"./iframe-CsUTfbme.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DU0GmGih.js";import{R as l}from"./zIndexSlice-DJN3Z2tA.js";import{C as x}from"./ComposedChart-CLOI7yF1.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B3hUCiu-.js";import{L as a}from"./Line-Ciwn5_Ze.js";import{X as c}from"./XAxis-B66nDtTW.js";import{T as g}from"./Tooltip-ghaBd95J.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CGtvq50a.js";import"./CartesianAxis-D0Iddbyw.js";import"./Layer-C0UzjkXP.js";import"./resolveDefaultProps-DOSPF-U5.js";import"./Text-1xaaQRGr.js";import"./DOMUtils-CCNMXYAS.js";import"./isWellBehavedNumber-CaHmgZiw.js";import"./Label-BrqLuQxp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BszTzZbW.js";import"./index-CpMCAhl1.js";import"./index-C0tTD0a-.js";import"./types-CNmnDBmM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DKAjtNca.js";import"./immer-BS6zuvPx.js";import"./RechartsWrapper-Bz5AtJCZ.js";import"./index-84tIClUK.js";import"./index-CiR04iLY.js";import"./axisSelectors-BaY3t_zv.js";import"./d3-scale-D08hqUcH.js";import"./CartesianChart-xV6uxcxT.js";import"./chartDataContext-Dks_l25O.js";import"./CategoricalChart-CDn_aEvK.js";import"./tooltipContext-wiAPXXIa.js";import"./ReactUtils-CIWjNZdp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DR8qZyZF.js";import"./useAnimationId-DbHaBqmd.js";import"./ActiveShapeUtils-eKrzz-9L.js";import"./RegisterGraphicalItemId-Bdk-Jfc1.js";import"./ErrorBarContext-BqDYRxxf.js";import"./GraphicalItemClipPath-ciWvPzTM.js";import"./SetGraphicalItem-X5S3Yot0.js";import"./getZIndexFromUnknown-BTzAmo9f.js";import"./graphicalItemSelectors-B5605qJb.js";import"./Curve-DdC8EqTQ.js";import"./step-DsryQMe8.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BlInVAX5.js";import"./Dot-BHvXSrDt.js";import"./getRadiusAndStrokeWidthFromDot-CsCejuOB.js";import"./useElementOffset-BfTrE2Dz.js";import"./uniqBy-cNbdeQjK.js";import"./iteratee-CEEi4l6n.js";import"./Cross-C0eJKPB6.js";import"./Sector-Bte7IZhf.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
