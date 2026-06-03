import{R as e}from"./iframe-CsUTfbme.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B66nDtTW.js";import{R as h}from"./zIndexSlice-DJN3Z2tA.js";import{C as g}from"./ComposedChart-CLOI7yF1.js";import{L as x}from"./Line-Ciwn5_Ze.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D08hqUcH.js";import{T as V}from"./Tooltip-ghaBd95J.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CGtvq50a.js";import"./CartesianAxis-D0Iddbyw.js";import"./Layer-C0UzjkXP.js";import"./resolveDefaultProps-DOSPF-U5.js";import"./Text-1xaaQRGr.js";import"./DOMUtils-CCNMXYAS.js";import"./isWellBehavedNumber-CaHmgZiw.js";import"./Label-BrqLuQxp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BszTzZbW.js";import"./index-CpMCAhl1.js";import"./index-C0tTD0a-.js";import"./types-CNmnDBmM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DKAjtNca.js";import"./immer-BS6zuvPx.js";import"./RechartsWrapper-Bz5AtJCZ.js";import"./index-84tIClUK.js";import"./index-CiR04iLY.js";import"./axisSelectors-BaY3t_zv.js";import"./CartesianChart-xV6uxcxT.js";import"./chartDataContext-Dks_l25O.js";import"./CategoricalChart-CDn_aEvK.js";import"./Curve-DdC8EqTQ.js";import"./step-DsryQMe8.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CIWjNZdp.js";import"./ActivePoints-BlInVAX5.js";import"./Dot-BHvXSrDt.js";import"./RegisterGraphicalItemId-Bdk-Jfc1.js";import"./ErrorBarContext-BqDYRxxf.js";import"./GraphicalItemClipPath-ciWvPzTM.js";import"./SetGraphicalItem-X5S3Yot0.js";import"./useAnimationId-DbHaBqmd.js";import"./getRadiusAndStrokeWidthFromDot-CsCejuOB.js";import"./ActiveShapeUtils-eKrzz-9L.js";import"./useElementOffset-BfTrE2Dz.js";import"./uniqBy-cNbdeQjK.js";import"./iteratee-CEEi4l6n.js";import"./Cross-C0eJKPB6.js";import"./Rectangle-DR8qZyZF.js";import"./Sector-Bte7IZhf.js";const Xt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Bt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Bt as __namedExportsOrder,Xt as default};
