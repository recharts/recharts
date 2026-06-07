import{R as e}from"./iframe-CcUePkZz.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BcdHEGYE.js";import{R as h}from"./zIndexSlice-DSc4KC75.js";import{C as g}from"./ComposedChart-CRM55qGb.js";import{L as x}from"./Line-DAxMD2wb.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-ac-XiUen.js";import{T as V}from"./Tooltip-DzrELefj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-UnfM8TPj.js";import"./CartesianAxis-B7nFXCrA.js";import"./Layer-CKbs6a8D.js";import"./resolveDefaultProps-BXf8ljNz.js";import"./Text-BLCpim0o.js";import"./DOMUtils-CgmzxpAH.js";import"./isWellBehavedNumber-CXwth3qC.js";import"./Label-dVerXnTS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4p-btGn.js";import"./index-Z6USwMiQ.js";import"./index-CJTFlpIe.js";import"./types-C4zY2OW7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BL5Mffta.js";import"./immer-VeyOR81A.js";import"./RechartsWrapper-DA0Yxt9x.js";import"./index-C-Pbn--W.js";import"./index-C1-J5F4u.js";import"./axisSelectors-BlPxUPB7.js";import"./CartesianChart-D-BudT5K.js";import"./chartDataContext-VDW5Tgrh.js";import"./CategoricalChart-CG91Q5ky.js";import"./Curve-Dhf7CAZi.js";import"./step-w_kmAd5Q.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BbZPIVL8.js";import"./useAnimationId-CH023PHf.js";import"./string-B6fdYHAA.js";import"./ActivePoints-D-HwpVLA.js";import"./Dot-CijEuNsy.js";import"./RegisterGraphicalItemId-Dk2pKOym.js";import"./ErrorBarContext-BIy678QN.js";import"./GraphicalItemClipPath-Bc96kw55.js";import"./SetGraphicalItem-D7jXrYhk.js";import"./getRadiusAndStrokeWidthFromDot-CTEsWB1S.js";import"./ActiveShapeUtils-CRuYv9Bp.js";import"./useElementOffset-CwhrXEx4.js";import"./uniqBy-CwL7HoSI.js";import"./iteratee-DDQVwsC-.js";import"./Cross-DTjUkbKF.js";import"./Rectangle-DC-jzmzs.js";import"./Sector-B9grfvlS.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
