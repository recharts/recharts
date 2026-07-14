import{R as e}from"./iframe-n-wQuCBi.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CqwZgwEA.js";import{R as h}from"./zIndexSlice-agpgazdg.js";import{C as g}from"./ComposedChart-QtT3UbV6.js";import{L as x}from"./Line-_0667e52.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Dq3pQP3q.js";import{T as V}from"./Tooltip-CArPWmfs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BKtFBsNE.js";import"./Layer-q34S3x6j.js";import"./resolveDefaultProps-DQgAjYOa.js";import"./Text-Cnp2kl38.js";import"./DOMUtils-B9ZjPicg.js";import"./isWellBehavedNumber-C5T5W5WV.js";import"./Label-1gu4eHha.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CKoiASff.js";import"./index-B670uwrn.js";import"./index-LEpyJ3u4.js";import"./types-DiIuPkat.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DRvXNutS.js";import"./throttle-DNZjDlXp.js";import"./RechartsWrapper--hZNEqf5.js";import"./index-Bp8i3QLZ.js";import"./index-ifJ0vXzc.js";import"./axisSelectors-DJGA74tj.js";import"./CartesianChart-D1BnCtWc.js";import"./chartDataContext-BUwB3ubO.js";import"./CategoricalChart-Bn54rxv3.js";import"./Curve-DeDi9IqD.js";import"./step-Cdwz2fUu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CukHfitT.js";import"./useAnimationId-CnnOw5XR.js";import"./ActivePoints-3GB3c-YC.js";import"./Dot-B6zDcllv.js";import"./RegisterGraphicalItemId-DirXNoHy.js";import"./ErrorBarContext-Dm_7tkVC.js";import"./GraphicalItemClipPath-NXqqiVYJ.js";import"./SetGraphicalItem-jej3rFoE.js";import"./getRadiusAndStrokeWidthFromDot-BrX-hwFD.js";import"./ActiveShapeUtils-D_ggCq42.js";import"./useElementOffset-Dbda4rug.js";import"./uniqBy-CtExDG4G.js";import"./iteratee-7MnTZri1.js";import"./Cross-B2HFXlv9.js";import"./Rectangle-CrC21nkp.js";import"./util-Dxo8gN5i.js";import"./Sector-B5UKPU85.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
